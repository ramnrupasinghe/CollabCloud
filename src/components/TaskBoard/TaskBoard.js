import React from 'react';
import TaskColumn from './TaskColumn';

function TaskBoard() {
  // Dummy data for task columns
  const taskColumns = [
    { id: 1, title: 'To Do', tasks: [] },
    { id: 2, title: 'In Progress', tasks: [] },
    { id: 3, title: 'Done', tasks: [] },
  ];

  return (
    <div className="task-board">
      {taskColumns.map((column) => (
        <TaskColumn key={column.id} column={column} />
      ))}
    </div>
  );
}

export default TaskBoard;
