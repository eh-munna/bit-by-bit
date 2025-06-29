import { useTheme } from '@/contexts/index.jsx';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className="
      w-full flex items-center justify-between px-6 py-4
      bg-white text-black
      dark:bg-gray-900 dark:text-slate-200
      shadow-md transition-colors duration-300
    "
    >
      <div className="text-xl font-bold tracking-tight">Bit By Bit</div>

      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>

      <button
        onClick={() => setTheme(theme === true ? false : true)}
        className="border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {theme === true ? <Moon /> : <Sun />}
      </button>
    </nav>
  );
}
