export const addTask = (name) => ({
  type: 'ADD_TASK',
  payload: { name }
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: { id }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: { id }
});

export const filterTasks = (status) => ({
  type: 'FILTER_TASKS',
  payload: { status }
});

export const sortTasks = (criteria) => ({
  type: 'SORT_TASKS',
  payload: { criteria }
});
