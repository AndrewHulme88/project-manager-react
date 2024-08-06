import React from 'react';

const Task = ({ task, taskIndex, projectId }) => {
  const toggleCompleted = () => {
    // Implement task completion toggle logic
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompleted}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
    </li>
  );
};

export default Task;
