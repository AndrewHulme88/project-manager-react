import React, { useState, useEffect } from 'react';
import { loadData, saveData } from './storage';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(loadData());
  }, []);

  const updateProjects = (newProjects) => {
    setProjects(newProjects);
    saveData(newProjects);
  };

  const addProject = (name) => {
    updateProjects([...projects, { name, tasks: [] }]);
  };

  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    updateProjects(newProjects);
  };

  const addTask = (projectIndex, taskName) => {
    const newProjects = [...projects];
    newProjects[projectIndex].tasks.push({ name: taskName, completed: false });
    updateProjects(newProjects);
  };

  const toggleTask = (projectIndex, taskIndex) => {
    const newProjects = [...projects];
    const taskList = newProjects[projectIndex].tasks;
    if (taskList[taskIndex]) { // Check if task exists
      taskList[taskIndex].completed = !taskList[taskIndex].completed;
      updateProjects(newProjects);
    } else {
      console.error(`Task at index ${taskIndex} does not exist.`);
    }
  };

  return (
    <div className="App">
      <h1>Project Manager</h1>
      <AddProjectForm onAddProject={addProject} />
      <ProjectList
        projects={projects}
        onRemoveProject={removeProject}
        onAddTask={addTask}
        onToggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
