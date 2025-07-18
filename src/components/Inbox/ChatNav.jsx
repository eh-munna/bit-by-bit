import { Link } from 'react-router';

export default function ChatNav() {
  return (
    <>
      <nav
        className="
      sticky top-0 z-40
      border-b border-gray-200 dark:border-gray-700
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-slate-200
      transition-colors duration-300
    "
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Home link */}
            <Link
              to="/"
              className="text-lg font-bold hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Home
            </Link>

            {/* Right side - Logout button */}
            <ul className="flex items-center space-x-6">
              <li>
                <button
                  className="
                  font-medium
                  hover:text-violet-600 dark:hover:text-violet-400
                  transition-colors
                "
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
