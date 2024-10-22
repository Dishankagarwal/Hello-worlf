import React from "react";
import { ReactComponent as Todo } from '../icons/Todo.svg';
import { ReactComponent as InProgress } from '../icons/inprogress.svg';
import { ReactComponent as Done } from '../icons/Done.svg';
import { ReactComponent as Backlog } from '../icons/Backlog.svg';

import LetterIcon from "./LetterIcon";


const Card = ({ task }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Todo':
        return <Todo />;
      case 'InProgress':
        return <InProgress />;
      case 'Completed':
        return <Done />;
      case 'Backlog':
        return <Backlog />;
      default:
        return null; // Return null if no matching status
    }
  };

  return (
    <div className="card">
      <p style={{display: "flex", justifyContent: "space-between"}}>{task.id} <LetterIcon letter={task.title.charAt(0)} /></p>
      <span>{getStatusIcon(task.status)} {task.title}</span>
      <h5>{task.description}</h5>
      <span>{task.type}</span>
      <span>{task.tag}</span>
    </div>
  );
};

export default Card;