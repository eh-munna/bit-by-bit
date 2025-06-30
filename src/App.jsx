import Counter from '@/components/Counter';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Feature from '@/components/ui/Feature';

export default function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Feature>
          <h1 className="text-3xl font-bold mb-4">Redux Hooks API</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              useSelector
            </code>{' '}
            and{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              useDispatch
            </code>{' '}
            hooks in Redux allow you to connect your React components directly
            to the Redux store without using higher-order components like{' '}
            <code>connect</code>. This modern approach makes your code simpler,
            more readable, and fully functional-component friendly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://react-redux.js.org/api/hooks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Official Documentation
            </a>

            <a
              href="https://github.com/eh-munna/bit-by-bit/tree/redux_1.6"
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
              Below is a simple counter application that demonstrates the use of
              Redux hooks,{' '}
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                useSelector
              </code>{' '}
              to read data from the store, and{' '}
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                useDispatch
              </code>{' '}
              to dispatch actions to update state.
            </p>
            <p>
              Click the buttons to increment or decrement the counter value.
            </p>
          </div>

          <Counter />
        </Feature>
      </main>

      <Footer />
    </>
  );
}
