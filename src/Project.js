import React from 'react';
import TaskList from './TaskList';

const Project = ({ project, index }) => {
  return (
    <li>
      <h2>{project.name}</h2>
      <TaskList tasks={project.tasks} projectId={index} />
      {/* Add/remove task functionality */}
    </li>
  );
};

export default Project;
