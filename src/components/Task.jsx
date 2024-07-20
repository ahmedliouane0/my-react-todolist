import { useState } from 'react';
import './Task.css';

export const Task = (props) => {
  const [done, setDone] = useState(false);

  const remove = (e) => {
    e.stopPropagation();  // Prevent the li click event from being triggered
    props.deleteTask(props.task.id);
  };

  const taskComplete = () => {
    setDone(!done);
  };

  return (
    <li onClick={taskComplete} className={done ? 'container done' : 'container'}>
      <p>{props.task.desc}</p>
      <button className='btn' onClick={remove}>DELETE</button>
    </li>
  );
};
