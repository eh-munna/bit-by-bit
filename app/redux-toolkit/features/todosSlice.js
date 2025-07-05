import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );
  const todos = await response.json();
  return todos;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default todosSlice.reducer;
export { fetchTodos };
