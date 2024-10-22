import React from 'react';
import Card from './Card';  // Ensure the path to Card is correct

const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
