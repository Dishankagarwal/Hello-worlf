import React from "react";

const Card = ({ task }) => {
  return (
    <div className="card">
      <p>{task.id}</p>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.type}</span>
      <span>{task.priority}</span>
    </div>
  );
};

export default Card;
