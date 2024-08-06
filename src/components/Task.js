const Task = ({ task, onToggle }) => (
  <li>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={onToggle}
    /> {task.name}
  </li>
);

export default Task;
