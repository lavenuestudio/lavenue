import "../HomePage.css";
import { useEffect, useState } from "react";
import { db, type ProjectData } from '../data/db.js'
import Project from "../components/Project.jsx";
import { useNavigate } from "react-router-dom";

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
