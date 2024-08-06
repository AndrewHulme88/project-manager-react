import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, projectId }) => {
  return (
    <ul>
      {tasks.map((task, taskIndex) => (
        <Task key={taskIndex} task={task} taskIndex={taskIndex} projectId={projectId} />
      ))}
    </ul>
  );
};

export default TaskList;
