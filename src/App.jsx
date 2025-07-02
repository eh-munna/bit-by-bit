import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Feature from '@/components/ui/Feature';
import BookingForm from './components/BookingForm';
import Bookings from './components/Bookings';

export default function App() {
  return (
    <>
      <Header />

      <main className="container py-6 min-h-screen px-4 max-w-7xl mx-auto">
        <Feature>
          <h1 className="text-3xl font-bold mb-4">Redux Booking Management</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            In this section, Redux is used to manage booking data through
            reducer logic. Bookings are stored in the global state, allowing
            users to
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              add
            </code>
            and
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              delete
            </code>
            entries efficiently. Each booking submission updates the Redux
            store, while deletions remove specific entries based on their unique
            IDs. This setup keeps the state centralized and predictable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Learn Redux Reducers
            </a>

            <a
              href="https://github.com/eh-munna/bit-by-bit/tree/redux_1.9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              View on GitHub
            </a>
          </div>
        </Feature>

        <Feature>
          <BookingForm />
        </Feature>
        <Feature>
          <Bookings />
        </Feature>
      </main>

      <Footer />
    </>
  );
}
