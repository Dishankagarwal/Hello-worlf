import React from "react";
import Card from "./Card";

const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{marginRight: "10px", fontWeight: "bold"}}>
          {title}
        </div>
        {tasks.length}
      </div>


      <div className="task-list">
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;