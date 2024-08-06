import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, projectIndex, onToggleTask }) => (
  <ul>
    {tasks.map((task, taskIndex) => (
      <Task
        key={taskIndex}
        task={task}
        onToggle={() => onToggleTask(taskIndex)}
      />
    ))}
  </ul>
);

export default TaskList;
