export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: { task }
  }
}

export function getTasksSuccess(data) {
  return {
    type: 'GET_TASKS_SUCCESS',
    payload: { data }
  }
}

export function getTasksFailure() {
  return {
    type: 'GET_TASKS_FAILURE'
  }
}