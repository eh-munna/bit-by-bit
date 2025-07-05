import { combineReducers, createStore } from 'redux';
import { counterReducer } from './Counter/counterReducer.js';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);
