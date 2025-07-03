import { ADD_PRODUCT, CALCULATE_QUANTITY } from './actionTypes';

// const initialProduct = {
//     name: '',
//     category: '',
//     imageUrl: '',
//     price: '',
//     quantity: '',
//   };

export const addProduct = (product) => {
  if (
    !product.name.trim() ||
    !product.price ||
    !product.quantity ||
    !product.category ||
    !product.imageUrl
  )
    return;
  return {
    type: ADD_PRODUCT,
    payload: {
      id: crypto.randomUUID(),
      ...product,
    },
  };
};

export const calculateQuantity = (id) => {
  return {
    type: CALCULATE_QUANTITY,
    payload: id,
  };
};
