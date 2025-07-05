import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './todos/todoReducer.js';

export const store = createStore(rootReducer, applyMiddleware(thunk));
