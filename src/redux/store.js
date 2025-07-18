import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares();
  },
});
