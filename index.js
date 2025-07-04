import { applyMiddleware, createStore } from 'redux';
import { fetchTodos } from './middlewares.js';
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }

    case 'todos/LOAD_TODO': {
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    }

    default:
      return state;
  }
};

const store = createStore(todoReducer, applyMiddleware(fetchTodos));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'todos/ADD_TODO',
  payload: {
    id: 1,
    text: 'Learn Redux',
  },
});

store.dispatch({
  type: 'todos/FETCH_TODOS',
});
