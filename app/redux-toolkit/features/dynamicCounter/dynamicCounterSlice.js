import { createSlice } from '@reduxjs/toolkit';
import { increment } from '../counter/counterSlice.js';

const initialState = {
  value: 0,
};

export const dynamicCounterSlice = createSlice({
  name: 'dynamicCounter',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(increment, (state, action) => {
      state.value = state.value + 1;
    });
  },
});

export const { incrementByAmount } = dynamicCounterSlice.actions;

export default dynamicCounterSlice.reducer;
