import React from "react";

const LetterIcon = ({ letter }) => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFA833']; // Array of colors
    const colorIndex = letter.charCodeAt(0) % colors.length; // Get color based on letter
    const backgroundColor = colors[colorIndex];

    return (
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '80%',
          backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 'bold',
          marginRight: '10px',
        }}
      >
        {letter.toUpperCase()}
      </div>
    );
  };

  export default LetterIcon;