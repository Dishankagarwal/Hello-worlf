import React, { useState } from 'react';
import './App.css';

import Board from './Components/Board'; // Adjust path based on actual folder structure



const App = () => {
  const [tasks, setTasks] = useState({
    First: [
      { id: 'CAM-5', title: '', description: 'Add Multi-Language Support Enable multi-language support within the...', type: 'Feature Request' },
      { id: 'CAM-8', title: '', description: 'Create onboarding tutorial for new users', type: 'Feature Request' },
    ],
    todo: [
      { id: 'CAM-4', title: '', description: 'Add Multi-Language Support', type: 'Feature Request' },
      { id: 'CAM-2', title: '', description: 'Implement Email Notification System', type: 'Feature Request' },
      { id: 'CAM-1', title: '', description: 'Update User Profile Page UI', type: 'Feature Request' },
    ],
    inProgress: [
      { id: 'CAM-3', title: '', description: 'Optimize database queries for performance', type: 'Feature Request' },
    ],
    done: [
      { id: 'CAM-6', title: '', description: 'Enhance Search Functionality', type: 'Feature Request' },
      { id: 'CAM-7', title: '', description: 'Integrate Third-Party Payment Gateway', type: 'Feature Request' },
      { id: 'CAM-11', title: '', description: 'Conduct Security Vulnerability Assessment', type: 'Feature Request' },
      { id: 'CAM-10', title: '', description: 'Upgrade Server Infrastructure', type: 'Feature Request' },
      { id: 'CAM-9', title: '', description: 'Implement Role-Based Access Control (RBAC)', type: 'Feature Request' },
    ],
    Cancelled: [],
  });

  return (
    <div className="App">
      {/* Pass the tasks state as a prop to the Board component */}
      <Board tasks1={tasks} />
    </div>
  );
};

export default App;
