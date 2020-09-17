import React, { useState } from 'react';

// import { Container } from './styles';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    setTasks([...tasks, 'make coffee']);
  }

  return (
    <div>
      <ul data-testid="list">
        {tasks.map(task => <li key={task}>{task}</li>)}
      </ul>
      <button onClick={handleAddTask}>Add</button>
      </div>
  );
}

export default TodoList;