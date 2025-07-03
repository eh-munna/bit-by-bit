import { ADD_TO_CART } from './actionTypes';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);

      if (existingProduct) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: parseInt(item.quantity) + 1 }
            : item
        );
      } else {
        return [...state, { ...product, quantity: 1 }];
      }
    }

    default:
      return state;
  }
};
