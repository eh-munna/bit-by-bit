import { DELETE_BOOKING, NEW_BOOKING } from './actions';

const bookings = [];

export default function bookingReducer(state = bookings, action) {
  switch (action.type) {
    case NEW_BOOKING:
      return [...state, action.payload];

    case DELETE_BOOKING:
      return state.filter((booking) => booking.id !== action.payload);
    default:
      return state;
  }
}
