export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: { task }
  }
}