import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Feature from '@/components/ui/Feature';
import TaskBoard from './components/TaskBoard';

export default function App() {
  return (
    <>
      <Header />

      <main className="container py-6 min-h-screen px-4 max-w-7xl mx-auto">
        <Feature>
          <h1 className="text-3xl font-bold mb-4">
            Redux To-Do Management with API Integration
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            This section showcases a to-do list managed with Redux and powered
            by API integration using Redux Thunk. Instead of local-only state,
            tasks are fetched, created, and updated via HTTP requests to a
            backend server. Asynchronous logic is handled through thunks,
            allowing smooth interactions while keeping your UI responsive. Tasks
            are stored in the Redux global state, enabling users to
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              add
            </code>
            new tasks,
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              delete
            </code>
            existing tasks, and
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              clear
            </code>
            all completed items efficiently. The app also provides
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              filtering
            </code>
            options based on task completion status and color-coded priorities.
            Each action triggers both API updates and Redux store changes,
            keeping your to-do list centralized and consistent across the entire
            application.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://redux.js.org/tutorials/fundamentals/part-6-async-logic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Learn Redux Thunk
            </a>

            <a
              href="https://github.com/eh-munna/bit-by-bit/tree/redux_4.3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              View on GitHub
            </a>
          </div>
        </Feature>

        <Feature>
          <TaskBoard />
        </Feature>
      </main>

      <Footer />
    </>
  );
}
