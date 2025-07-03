import { ADD_PRODUCT, CALCULATE_QUANTITY } from './actionTypes';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    imageUrl: 'https://example.com/images/headphones.jpg',
    price: '59.99',
    quantity: '25',
  },
  {
    id: 2,
    name: 'Running Shoes',
    category: 'Sportswear',
    imageUrl: 'https://example.com/images/shoes.jpg',
    price: '89.50',
    quantity: '10',
  },
];
export const productReducer = (state = products, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...state, action.payload];
    }

    case CALCULATE_QUANTITY: {
      const id = action.payload;
      return state.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: parseInt(product.quantity) - 1,
          };
        }
        return product;
      });
    }

    default: {
      return state;
    }
  }
};
