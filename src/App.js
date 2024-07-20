import './App.css';
import { Task } from './components/Task';
import { TaskForm } from './components/TaskForm';
import { useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState([{desc :'do homework ',id:0}]);
  const [index, setIndex] = useState(1);

  const addTask = (task) => {
    setTaskList([...taskList, {desc: task, id: index}]);
    setIndex(index + 1);
  };

  const deleteTask = (id) => {
    const newTaskList = taskList.filter(taskItem => taskItem.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <ol>
        {taskList.map((taskItem) => (
          <Task key={taskItem.id} deleteTask={deleteTask} task={taskItem} />
        ))}
      </ol>
    </div>
  );
}

export default App;
