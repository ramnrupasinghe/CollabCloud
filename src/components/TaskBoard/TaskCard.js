import React from 'react';

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <span>{task.title}</span>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
