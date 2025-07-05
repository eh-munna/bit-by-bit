import { fetchTodos } from './features/todosSlice.js';
import { store } from './store.js';

// console.log(store.getState());

store.subscribe(() => {
  console.log(`Current state:`, store.getState());
});

store.dispatch(fetchTodos());
