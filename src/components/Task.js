import React from 'react';

const Task = ({ task, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
    </li>
  );
};

export default Task;
