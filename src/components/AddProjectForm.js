import React, { useState } from 'react';

const AddProjectForm = ({ onAddProject }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      onAddProject(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New project name"
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
