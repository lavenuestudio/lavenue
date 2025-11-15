import lavenueLogo from "./assets/lavenue.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { db } from './data/db'
import Project from "./components/Project.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
  setData(db);
}, [])
  return (
    <>
      <div className="app-title">
        <a href="#" target="_blank">
          <img src={lavenueLogo} className="logo lavenue" alt="L'Avenue logo" />
        </a>
      </div>
      <div className="project-container">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default App;
