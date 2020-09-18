import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from '../../store/modules/tasks/actions';

// import { Container } from './styles';

function TodoList() {
  const [newTask, setNewTask] = useState('');

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);


  function handleAddTask() {
    dispatch(addTask(newTask));
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