import React from "react";

const Card = ({ task }) => {
  return (
    <div className="card">
      <p>{task.id}</p>
      <h4>{task.title}</h4>
      <h5>{task.description}</h5>
      <span>{task.type}</span>
      <span>{task.priority}</span>
    </div>
  );
};

export default Card;
