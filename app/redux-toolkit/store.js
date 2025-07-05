import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js';
import dynamicCounterSlice from './features/dynamicCounter/dynamicCounterSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterSlice,
  },
});
