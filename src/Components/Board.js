import React from 'react';
import Column from './Column';
const Board = ({ tasks , sortBy,groupBy,userDetailMap}) => {
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
                    
                    return a.localeCompare(b);}
                // Add more sorting conditions as needed
                return 0; // No sorting if no valid sort parameter is found
            }).map((columnKey) => {
                let title = columnKey
                if(groupBy=="userId"){
                    title = userDetailMap[columnKey]
                }
                
                return <Column key={columnKey} title={title} tasks={tasks[columnKey]}  />
})}
  </div>
    );
};

export default Board;