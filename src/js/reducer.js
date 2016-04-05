const counter = (state, action) => {
  state = state || 0;
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const todos = (state, action) => {
  state = state || [];
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      });
    default:
      return state;
  }
};

module.exports = { counter, todos };
