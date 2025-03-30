const initialState = {
    tasks: [],
    filter: 'all',
    sort: 'date'
  };
  
  function taskReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { id: Date.now(), name: action.payload.name, completed: false, date: new Date(), priority: 1 }]
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) => (task.id === action.payload.id ? { ...task, completed: !task.completed } : task))
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload.id)
        };
      case 'FILTER_TASKS':
        return { ...state, filter: action.payload.status };
      case 'SORT_TASKS':
        const sortedTasks = [...state.tasks].sort((a, b) => {
          if (action.payload.criteria === 'date') {
            return new Date(b.date) - new Date(a.date);
          } else if (action.payload.criteria === 'priority') {
            return b.priority - a.priority;
          }
          return 0;
        });
        return { ...state, tasks: sortedTasks };
      default:
        return state;
    }
  }
  
  export default taskReducer;
  