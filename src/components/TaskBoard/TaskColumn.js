import React from 'react';
import TaskCard from './TaskCard';

function TaskColumn({ column }) {
  return (
    <div className="task-column">
      <h3>{column.title}</h3>
      {column.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskColumn;
