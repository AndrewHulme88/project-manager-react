import React from 'react';
import Project from './Project';

const ProjectList = ({ projects, onRemoveProject, onAddTask, onToggleTask }) => (
  <div>
    {projects.map((project, index) => (
      <Project
        key={index}
        project={project}
        index={index}
        onRemove={() => onRemoveProject(index)}
        onAddTask={(taskName) => onAddTask(index, taskName)}
        onToggleTask={(taskIndex) => onToggleTask(index, taskIndex)}
      />
    ))}
  </div>
);

export default ProjectList;
