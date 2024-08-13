import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const Project = ({ project, index, onRemove, onAddTask, onToggleTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskName) {
      onAddTask(index, newTaskName);
      setNewTaskName(''); // Reset the task name input
    }
  };

  return (
    <div>
      <h2>
        {project.name}
        <button onClick={() => onRemove(index)}>Remove</button>
      </h2>
      {/* Task Addition Form */}
      <form onSubmit={handleAddTask}>
        <input
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="New task name"
        />
        <button type="submit">Add Task</button>
      </form>
      {/* Task List */}
      <TaskList
        tasks={project.tasks}
        projectIndex={index}
        onToggleTask={onToggleTask}
      />
    </div>
  );
};

export default Project;
