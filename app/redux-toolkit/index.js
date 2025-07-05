import { increment } from './features/counter/counterSlice.js';
import { incrementByAmount } from './features/dynamicCounter/dynamicCounterSlice.js';
import { store } from './store.js';

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

console.log(`Start Incrementing...`);

store.dispatch(increment());
console.log(`Dynamic Incrementing...`);
console.log(`_____________________`);
store.dispatch(incrementByAmount(5));
console.log(`------------------------------------`);
