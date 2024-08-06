import React, { useState, useEffect } from 'react';
import { loadData, saveData } from './storage';
import ProjectList from './ProjectList';
import AddProjectForm from './AddProjectForm';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = loadData();
    if (storedProjects) {
      setProjects(storedProjects);
    }
  }, []);

  const addProject = (projectName) => {
    const newProject = { name: projectName, tasks: [] };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    saveData(updatedProjects);
  };

  // Other state management functions like removeProject, addTask, etc.

  return (
    <div>
      <h1>Project Manager</h1>
      <AddProjectForm onAddProject={addProject} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
