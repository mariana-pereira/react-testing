import React, { useState } from 'react';

// import { Container } from './styles';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask() {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  return (
    <form data-testid="task-form" onSubmit={handleAddTask}>
      <ul data-testid="list">
        {tasks.map(task => <li key={task}>{task}</li>)}
      </ul>
      <label htmlFor="task">Task</label>
      <input id="task" value={newTask} onChange={e => setNewTask(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
      </form>
  );
}

export default TodoList;