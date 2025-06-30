import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { counterReducer } from './counter/counterReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
