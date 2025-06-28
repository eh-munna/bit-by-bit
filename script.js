// selecting the elements from the DOM
const allMatches = document.querySelector('.all-matches');
const addMatchBtn = document.querySelector('.btn');
const resetMatchBtn = document.querySelector('.reset');

// initial State for the Redux store
const initialState = {
  matches: [
    {
      id: 1,
      matchName: 'Match 1',
      score: 0,
    },
  ],
};

// action identifiers
const ADD_MATCH = 'ADD_MATCH';
const DELETE_MATCH = 'DELETE_MATCH';
const INCREMENT_SCORE = 'INCREMENT_SCORE';
const DECREMENT_SCORE = 'DECREMENT_SCORE';
const RESET_SCORE = 'RESET_SCORE';

// action creators
function addMatch() {
  return { type: ADD_MATCH };
}
function deleteMatch(id) {
  return { type: DELETE_MATCH, payload: id };
}
function incrementScore(id, value) {
  return { type: INCREMENT_SCORE, payload: { id, value } };
}
function decrementScore(id, value) {
  return { type: DECREMENT_SCORE, payload: { id, value } };
}
function resetScore() {
  return { type: RESET_SCORE };
}

// Redux reducer function
function scoreBoardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MATCH:
      return {
        ...state,
        matches: [
          ...state.matches,
          {
            id: state.matches.length + 1,
            matchName: `Match ${state.matches.length + 1}`,
            score: 0,
          },
        ],
      };
    case DELETE_MATCH:
      return {
        ...state,
        matches: state.matches.filter((match) => match.id !== action.payload),
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.id
            ? { ...match, score: match.score + action.payload.value }
            : { ...match }
        ),
      };
    case DECREMENT_SCORE:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.id
            ? {
                ...match,
                score:
                  action.payload.value > match.score
                    ? 0
                    : match.score - action.payload.value,
              }
            : { ...match }
        ),
      };
    case RESET_SCORE:
      return {
        ...state,
        matches: state.matches.map((match) => ({ ...match, score: 0 })),
      };
    default:
      return state;
  }
}

// create Redux store
const store = Redux.createStore(scoreBoardReducer);

// function to render the matches
function renderMatches() {
  const { matches } = store.getState();
  allMatches.innerHTML = matches
    .map(
      (match) => `
        <div class="match" data-id="${match.id}">
          <div class="wrapper">
            <button class="btn" data-role="delete" data-id="${match.id}">Delete</button>
            <h3 class="matchName">${match.matchName}</h3>
          </div>
          <div class="inc-dec">
            <form class="incrementForm">
              <h4>Increment</h4>
              <input type="number" name="increment" />
            </form>
            <form class="decrementForm">
              <h4>Decrement</h4>
              <input type="number" name="decrement" />
            </form>
          </div>
          <div class="numbers">${match.score}</div>
        </div>
      `
    )
    .join('');
}

// subscribe to store to render on state change
renderMatches();
store.subscribe(renderMatches);

// add match button listener
addMatchBtn.addEventListener('click', () => {
  store.dispatch(addMatch());
});

// delete button listener (event delegation)
allMatches.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (btn?.dataset.role === 'delete') {
    const id = parseInt(btn.dataset.id);
    store.dispatch(deleteMatch(id));
  }
});

// handle Enter key on increment/decrement inputs
allMatches.addEventListener('keyup', (e) => {
  if (e.target.tagName === 'INPUT' && e.key === 'Enter') {
    e.preventDefault();
    const incrementForm = e.target.closest('.incrementForm');
    const decrementForm = e.target.closest('.decrementForm');
    const matchId = parseInt(e.target.closest('.match').dataset.id);
    const value = parseInt(e.target.value);

    if (incrementForm) {
      if (!isNaN(value)) store.dispatch(incrementScore(matchId, value));
      e.target.value = '';
    } else if (decrementForm) {
      if (!isNaN(value)) store.dispatch(decrementScore(matchId, value));
      e.target.value = '';
    }
  }
});

// reset button listener
resetMatchBtn.addEventListener('click', () => {
  store.dispatch(resetScore());
});

// prevent form submission (page reload)
allMatches.addEventListener('submit', (e) => {
  e.preventDefault();
});
