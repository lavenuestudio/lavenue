import "../HomePage.css";
import { useEffect, useState } from "react";
import { db } from '../data/db.js'
import Project from "../components/Project.jsx";
import { useNavigate } from "react-router-dom";
import type { ProjectData } from "@/types/ProjectTypes.js";


function HomePage() {
const [data, setData] = useState<ProjectData[]>([]);
const navigate = useNavigate();
  useEffect(() => {
  setData(db);
}, []);

  const handleProjectClick = (id: string) => {
    navigate(`/${id}`);
  };
  return (
    <>
      <div className="project-container">
        {data.map((project) => (
          <Project key={project.id} project={project} onClick={() => handleProjectClick(project.id)} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
