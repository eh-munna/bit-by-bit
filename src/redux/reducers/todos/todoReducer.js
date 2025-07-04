import {
  ADD,
  CLEAR_COMPLETED,
  COMPLETED_ALL,
  DELETE,
  LOADED,
  SELECTED_COLOR,
  TOGGLE,
} from './actionTypes';

const todos = [];
export const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case LOADED: {
      return [...action.payload];
    }

    case ADD: {
      return [...state, action.payload];
    }

    case TOGGLE: {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    }

    case SELECTED_COLOR: {
      const { todoId, color } = action.payload;

      return state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            color: color,
          };
        }
        return todo;
      });
    }

    case DELETE: {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case COMPLETED_ALL: {
      return state.map((todo) => {
        return {
          ...todo,
          completed: action.payload,
        };
      });
    }

    case CLEAR_COMPLETED: {
      return state.filter((todo) => !todo.completed);
    }

    default: {
      return state;
    }
  }
};
