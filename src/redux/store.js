import { createStore } from 'redux';
import bookingReducer from './reducers/booking/bookingReducer';

export const store = createStore(bookingReducer);
