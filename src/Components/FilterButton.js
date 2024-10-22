import React, { useState } from 'react';
import { ReactComponent as Display } from '../icons/Display.svg'; 
import { ReactComponent as Down } from '../icons/down.svg'; 

const FilterButton = ({
  groupByValue,
  sortByValue,
  handleGroupByChange,
  handleSortByChange

}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleTogglePopup}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '5px',
          background: '#FFFFFF',
          cursor: 'pointer',
          border: '2px solid #808080',
          borderRadius: '4px'
        }}
      >
        <Display style={{ marginRight: '5px' }} />
        Display
        <Down style={{ marginRight: '5px' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          minWidth: '200px',
          border: '1px solid #ccc',
          background: '#fff',
          padding: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          zIndex: 10,
          marginTop: '5px'
        }}>
          <label style={{display: "flex", justifyContent: "space-between"}}>
            Group By:
            <select value={groupByValue} onChange={handleGroupByChange}>
              <option value="status">Status</option>
              <option value="userId">User ID</option>
              <option value="priority">Priority</option>
            </select>
          </label>
          <br />
          <label style={{display: "flex", justifyContent: "space-between"}}>
            Sort By:
            <select value={sortByValue} onChange={handleSortByChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default FilterButton;