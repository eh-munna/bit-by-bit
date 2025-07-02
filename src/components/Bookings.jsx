import { useSelector } from 'react-redux';
import Booking from './Booking';

export default function Bookings() {
  const bookings = useSelector((bookings) => bookings);
  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-2">
      {/* Header Row */}
      <div className="grid grid-cols-10 gap-3 p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
        <div className="col-span-2 text-xs font-semibold tracking-wide text-gray-700 dark:text-slate-200 uppercase">
          Destination From
        </div>
        <div className="col-span-2 text-xs font-semibold tracking-wide text-gray-700 dark:text-slate-200 uppercase">
          Destination To
        </div>
        <div className="col-span-2 text-xs font-semibold tracking-wide text-gray-700 dark:text-slate-200 uppercase">
          Journey Date
        </div>
        <div className="col-span-2 text-xs font-semibold tracking-wide text-gray-700 dark:text-slate-200 uppercase">
          Guests
        </div>
        <div className="col-span-1 text-xs font-semibold tracking-wide text-gray-700 dark:text-slate-200 uppercase">
          Class
        </div>
        <div className="col-span-1 text-xs font-semibold tracking-wide text-gray-700 dark:text-slate-200 uppercase text-center">
          Delete
        </div>
      </div>

      {/* Data Rows */}
      {bookings?.map((booking) => (
        <div
          key={booking.id}
          className="grid grid-cols-10 gap-3 items-center p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          <Booking booking={booking} />
        </div>
      ))}

      {bookings?.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-slate-400">
          No bookings available.
        </div>
      )}
    </div>
  );
}
