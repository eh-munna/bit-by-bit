import { DELETE_BOOKING, NEW_BOOKING } from './actions';

export const addBooking = (booking) => {
  return {
    type: NEW_BOOKING,
    payload: {
      ...booking,
      id: crypto.randomUUID(),
    },
  };
};

export const deleteBooking = (id) => {
  return {
    type: DELETE_BOOKING,
    payload: id,
  };
};
