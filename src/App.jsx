import Auth from '@/components/Auth';
import Counter from '@/components/Counter';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Feature from '@/components/ui/Feature';

export default function App() {
  return (
    <>
      <Header />

      <main className="container py-6 min-h-screen px-4 max-w-7xl mx-auto">
        <Feature>
          <h1 className="text-3xl font-bold mb-4">Redux combineReducers API</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              combineReducers
            </code>{' '}
            function in Redux helps you organize your state management logic by
            splitting your root reducer into smaller slice reducers, each
            responsible for managing its own part of the state. This makes your
            Redux store more maintainable and scalable as your application
            grows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://redux.js.org/api/combineReducers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Official Documentation
            </a>

            <a
              href="https://github.com/eh-munna/bit-by-bit/tree/redux_1.7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              View on GitHub
            </a>
          </div>
        </Feature>

        <Feature>
          <h2 className="text-2xl font-semibold mb-4 border-0 border-b pb-2">
            Working Example
          </h2>

          <div className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <p>
              Below is an example demonstrating how to set up a Redux store
              using{' '}
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                combineReducers
              </code>
              . This allows you to manage multiple slices of state in a
              structured and scalable way.
            </p>
            <p>
              For instance, you might keep one slice for counter logic and
              another for user authentication, each with their own reducer.
              Combining them ensures that the Redux store stays organized even
              as your app grows.
            </p>
            <p>
              Click the buttons below to interact with one of the slices – a
              simple counter – managed through the combined reducers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 border-0 border-b pb-2">
                Counter Example
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This counter is managed by Redux. You can increment or decrement
                the count using the buttons below. The state is managed in a
                separate slice reducer, demonstrating how{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  combineReducers
                </code>{' '}
                helps keep your Redux store organized.
              </p>
              <Counter />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 border-0 border-b pb-2">
                Authentication Example
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This authentication component simulates a login/logout feature.
                It demonstrates how you can manage user authentication state in
                a separate slice reducer, allowing for clear separation of
                concerns in your Redux store.
              </p>
              <Auth />
            </div>
          </div>
        </Feature>
      </main>

      <Footer />
    </>
  );
}
