import React, { useState } from 'react';

const AddProjectForm = ({ onAddProject }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject(projectName);
    setProjectName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
