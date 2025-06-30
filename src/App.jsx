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
          <h1 className="text-3xl font-bold mb-4">Redux Connect API</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              connect
            </code>{' '}
            API in Redux is a powerful tool that links your React components to
            the Redux store. It allows you to select data and dispatch actions
            without manually subscribing to store updates. While newer patterns
            like hooks are popular, <code>connect</code> remains widely used in
            many mature codebases.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://react-redux.js.org/api/connect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Official Documentation
            </a>

            <a
              href="https://github.com/eh-munna/bit-by-bit/tree/redux_1.5"
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
              the <code>connect</code> API to manage state.
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
