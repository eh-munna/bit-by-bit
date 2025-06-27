// linking DOM elements

const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

// Reducer
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 };
    case 'decrement':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

// Create Redux store
const store = Redux.createStore(counterReducer);

// Render function
function render() {
  const state = store.getState();
  counterValue.textContent = state.value;
}

// Initial render
render();

// Subscribe render to store updates
store.subscribe(render);

// Button event listeners
incrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'increment' });
});

decrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'decrement' });
});
