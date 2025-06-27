// linking DOM elements

const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

// action identifiers

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// Reducer
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case DECREMENT:
      return { ...state, value: state.value - action.payload };
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
  store.dispatch(increment(2));
});

decrementBtn.addEventListener('click', () => {
  store.dispatch(decrement(1));
});
