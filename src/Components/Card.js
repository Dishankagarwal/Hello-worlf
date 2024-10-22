import React from 'react';

const Card = ({ task }) => {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.type}</span>
    </div>
  );
};

export default Card;
