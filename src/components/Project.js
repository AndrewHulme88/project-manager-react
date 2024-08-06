import React from 'react';
import TaskList from './TaskList';

const Project = ({ project, index, onRemove, onAddTask, onToggleTask }) => (
  <div>
    <h2>{project.name} <button onClick={onRemove}>Remove</button></h2>
    {/* Add Task form and TaskList go here */}
  </div>
);

export default Project;
