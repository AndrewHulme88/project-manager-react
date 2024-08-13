import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New task name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
