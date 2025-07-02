import { useDispatch } from 'react-redux';
import { deleteBooking } from '../redux/reducers/booking/actionTypes';
import Button from './ui/Button';

export default function Booking({ booking }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
  };

  return (
    <>
      <div className="col-span-2 text-gray-800 dark:text-slate-200">
        {booking.from}
      </div>
      <div className="col-span-2 text-gray-800 dark:text-slate-200">
        {booking.to}
      </div>
      <div className="col-span-2 text-gray-800 dark:text-slate-200">
        {booking.date}
      </div>
      <div className="col-span-2 text-gray-800 dark:text-slate-200">
        {booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}
      </div>
      <div className="col-span-1 text-gray-800 dark:text-slate-200">
        {booking.travelClass}
      </div>
      <div className="col-span-1 flex justify-center">
        <Button
          onClick={() => handleDelete(booking.id)}
          className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600 dark:hover:bg-red-400 transition-colors duration-300"
        >
          Delete
        </Button>
      </div>
    </>
  );
}
