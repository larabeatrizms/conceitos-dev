import React, { useState, useEffect } from "react";
import api from "./services/api.js";

import "./App.css";
import backgroundImage from "./assets/background.jpeg";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);

    // setProjects([...projects, `Novo projeto ${Date.now()}`]);

    // console.log(projects);

    const response = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      owner: "Lara beatriz",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      {/* <img src={backgroundImage} width={300} alt="" className="" /> */}

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
