import React from 'react';
import Column from './Column';
const Board = ({ tasks , sortBy,groupBy}) => {
    // Safely handle when tasks is undefined, null, or an empty array
    if (!tasks || tasks.length === 0) {
        return <div>No tasks available</div>;
    }
    console.log("akdk",tasks
    )

  return (
    <div className="board">
    {/* Define an array of column titles and map over it */}
    {Object.keys(tasks).sort((a, b) => {
                if (groupBy === 'priority') {
                    return b - a; // Ascending order
                } else if (groupBy === 'title') {
                    
                    return a.localeCompare(b); // Alphabetical order
                } else if (groupBy === 'userId') {
                    console.log("usrId",a,b)
                    return a.localeCompare(b);}
                // Add more sorting conditions as needed
                return 0; // No sorting if no valid sort parameter is found
            }).map((columnKey) => (
      <Column key={columnKey} title={columnKey} tasks={tasks[columnKey]} />
    ))}
  </div>
    );
};

export default Board;