import React from 'react';
import Column from './Column';
const Board = ({ tasks }) => {
    // Safely handle when tasks is undefined, null, or an empty array
    if (!tasks || tasks.length === 0) {
        return <div>No tasks available</div>;
    }
    console.log("akdk",tasks
    )

  return (
    <div className="board">
    {/* Define an array of column titles and map over it */}
    {Object.keys(tasks).map((columnKey) => (
      <Column key={columnKey} title={columnKey} tasks={tasks[columnKey]} />
    ))}
  </div>
    );
};

export default Board;