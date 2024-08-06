import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </ul>
  );
};

export default ProjectList;
