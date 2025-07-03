import { combineReducers } from 'redux';
import { filterReducer } from './filters/filterReducer';
import { todoReducer } from './todos/todoReducer';

export const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});
