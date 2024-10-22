import React from 'react';
import Column from './Column';  // Ensure the path to Column is correct

const Board = ( tasks2 ) => {
  let taskslist = tasks2["tasks1"]
  console.log("value of task2" , tasks2["tasks1"])
  return (
<div className="board">
  {/* Define an array of column titles and map over it */}
  {Object.keys(taskslist).map((columnKey) => (
    <Column key={columnKey} title={columnKey} tasks={taskslist[columnKey]} />
  ))}
</div>

  );
};


export default Board;
