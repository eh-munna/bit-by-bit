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
          <h1 className="text-3xl font-bold mb-4">Redux Middleware API</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Redux{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              middleware
            </code>{' '}
            is a powerful mechanism that lets you extend Redux's dispatch
            function. It provides a way to intercept actions before they reach
            the reducers, enabling you to add custom behavior such as logging,
            crash reporting, performing asynchronous requests, or modifying
            actions on the fly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://redux.js.org/understanding/thinking-in-redux/advanced-middleware"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Official Middleware Documentation
            </a>

            <a
              href="https://github.com/eh-munna/bit-by-bit/tree/redux_1.8"
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

          <h2 className="text-2xl font-semibold mb-4 border-0 border-b pb-2">
            Working Middleware Example
          </h2>

          <div className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <p>
              Below is a simple example of Redux middleware that logs the state
              before and after each dispatched action. This middleware
              intercepts actions, prints the current state, then allows the
              action to proceed, and finally logs the updated state. It’s a
              great way to debug your Redux flow and understand how state
              updates.
            </p>
            <p>
              Middleware lets you extend Redux in a flexible way, adding
              features like asynchronous logic, logging, analytics, and more
              without modifying your reducers or components.
            </p>
            <p>
              Try dispatching actions in your app and watch the console logs to
              see middleware in action.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 border-0 border-b pb-2">
                Logger Middleware
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This middleware logs the <strong>current state</strong> before
                an action is dispatched, the <strong>action</strong> itself, and
                the <strong>next state</strong> after the action has been
                processed by reducers. It helps visualize how your state evolves
                with each action.
              </p>
              <Counter />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 border-0 border-b pb-2">
                How Middleware Works
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Middleware wraps the store’s <code>dispatch</code> function,
                intercepting every action that passes through. It receives the{' '}
                <code>store</code> and the <code>next</code> middleware or
                dispatch function, and returns a function that takes the{' '}
                <code>action</code>.
              </p>
              <p>
                This allows you to execute code before and after an action is
                dispatched, enabling useful side effects, like logging,
                analytics, error handling, or asynchronous workflows.
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
