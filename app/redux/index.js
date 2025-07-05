import { store } from './store.js';
import { fetchTodos } from './todos/actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchTodos());
