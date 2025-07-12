import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import filterReducer from './features/filter/filterSlice';
import tagsReducer from './features/tags/tagsSlice';
import testReducer from './features/testSlice';

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    filter: filterReducer,
    test: testReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(apiSlice.middleware);
  },
});
