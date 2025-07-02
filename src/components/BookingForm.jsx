import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../redux/reducers/booking/actionTypes';
import Button from './ui/Button';

export default function BookingForm() {
  const initialBooking = {
    from: '',
    to: '',
    date: '',
    guests: '1',
    travelClass: 'Economy',
  };

  const [booking, setBooking] = useState(initialBooking);
  const bookings = useSelector((bookings) => bookings);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking(booking));
    setBooking(initialBooking);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-4 items-center transition-colors duration-300"
    >
      {/* Destination From */}
      <select
        name="from"
        value={booking.from}
        onChange={handleChange}
        required
        className="w-full md:w-48 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300"
      >
        <option value="" disabled>
          Destination From
        </option>
        <option value="New York">New York</option>
        <option value="London">London</option>
        <option value="Paris">Paris</option>
        <option value="Tokyo">Tokyo</option>
      </select>

      {/* Destination To */}
      <select
        name="to"
        value={booking.to}
        onChange={handleChange}
        required
        className="w-full md:w-48 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300"
      >
        <option value="" disabled>
          Destination To
        </option>
        <option value="New York">New York</option>
        <option value="London">London</option>
        <option value="Paris">Paris</option>
        <option value="Tokyo">Tokyo</option>
      </select>

      {/* Journey Date */}
      <input
        type="date"
        name="date"
        value={booking.date}
        onChange={handleChange}
        required
        className="w-full md:w-48 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300"
      />

      {/* Guests */}
      <select
        name="guests"
        value={booking.guests}
        onChange={handleChange}
        required
        className="w-full md:w-24 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300"
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} {i === 0 ? 'Guest' : 'Guests'}
          </option>
        ))}
      </select>

      {/* Class */}
      <select
        name="travelClass"
        value={booking.travelClass}
        onChange={handleChange}
        required
        className="w-full md:w-40 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300"
      >
        <option value="Economy">Economy</option>
        <option value="Business">Business</option>
        <option value="First Class">First Class</option>
      </select>

      {/* Booking Button */}
      <Button
        disabled={bookings.length === 3}
        type="submit"
        className="w-full md:w-auto px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300"
      >
        Book Now
      </Button>
    </form>
  );
}
