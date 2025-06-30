import { DECREMENT, INCREMENT } from '@/redux/counter/actionTypes';

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: action.payload ? state.value + action.payload : state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value:
          state.value - (action.payload || 1) < 0
            ? 0
            : state.value - (action.payload || 1),
      };
    default:
      return state;
  }
};
