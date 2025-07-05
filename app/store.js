import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux-toolkit/features/counter/counterSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
