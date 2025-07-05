import { combineReducers } from 'redux';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos: todoReducer,
});
