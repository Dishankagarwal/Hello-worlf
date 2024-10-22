import React from "react";
import Column from "./Column";
const PriorityList = ["No priority", "Low", "Medium", "High", "Urgent"];
const Board = ({ tasks, sortBy, groupBy, userDetailMap }) => {
  if (!tasks || tasks.length === 0) {
    return <div>No tasks available</div>;
  }
  console.log("akdk", tasks);
  return (
    <div className="board">
      {/* Define an array of column titles and map over it */}
      {Object.keys(tasks)
        .sort((a, b) => {
          if (groupBy === "priority") {
            return b - a;
          } else if (groupBy === "title") {
            return a.localeCompare(b);
          } else if (groupBy === "userId") {
            return a.localeCompare(b);
          }

          return 0;
        })
        .map((columnKey) => {
          let title = columnKey;
          if (groupBy == "userId") {
            title = userDetailMap[columnKey];
          } else if (groupBy == "priority") {
            console.log("hdh", columnKey);
            title = PriorityList[columnKey];
          }

          return (
            <Column key={columnKey} title={title} tasks={tasks[columnKey]} />
          );
        })}
    </div>
  );
};

export default Board;
