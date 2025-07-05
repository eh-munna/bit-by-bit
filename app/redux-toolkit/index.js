import { decrement, increment } from './features/counter/counterSlice.js';
import { store } from './store.js';

store.subscribe(() => {
  console.log(store.getState());
});

console.log(`Start Incrementing...`);
console.log(`_____________________`);
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
console.log(`------------------------------------`);
console.log(`Start Decrementing...`);
console.log(`_____________________`);
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
