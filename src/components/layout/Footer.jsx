export default function Footer() {
  return (
    <footer
      className="
      w-full mt-12
      border-t border-gray-200 dark:border-gray-700
      bg-gray-50 dark:bg-gray-900
      text-gray-700 dark:text-slate-300
      transition-colors duration-300
    "
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Bit By Bit. All rights reserved.
        </p>

        <ul className="flex space-x-6 text-sm">
          <li>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
