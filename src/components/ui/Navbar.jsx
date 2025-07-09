import Button from '@/components/ui/Button';
import { useTheme } from '@/contexts/index.jsx';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className="
        w-full flex items-center justify-between
        px-8 py-4
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-slate-200
        shadow-lg
        transition-colors duration-300
      "
    >
      <div className="text-2xl font-extrabold tracking-tight">
        <Link to="/">Bit By Bit</Link>
      </div>

      <ul className="flex gap-8 text-lg font-medium items-center">
        <li>
          <Link
            to="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Button
            onClick={() => setTheme(!theme)}
            className="cursor-pointer
          flex items-center justify-center
          border border-gray-300 dark:border-gray-600
          px-3 py-2
          rounded-lg
          hover:bg-gray-100 dark:hover:bg-gray-800
          transition-colors duration-300
        "
          >
            {theme === true ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </li>
      </ul>
    </nav>
  );
}
