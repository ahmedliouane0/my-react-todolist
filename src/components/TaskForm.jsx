import { useState } from "react";

export const TaskForm = (props) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(task);
    setTask(''); // Reset task input field
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Description</label>
        <input 
          onChange={handleChange} 
          value={task} 
          type="text" 
          name="task" 
          id="task" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
