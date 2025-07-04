import { Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';

import {
  changeColor,
  removeTodo,
  toggleStatus,
} from '../redux/reducers/todos/thunks';
import { cn } from '../utils/cn';
import Button from './ui/Button';

const AVAILABLE_COLORS = ['red', 'green', 'yellow'];

const COLOR_CLASSES = {
  red: 'border-red-500 bg-red-500',
  green: 'border-green-500 bg-green-500',
  yellow: 'border-yellow-500 bg-yellow-500',
};

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { id, text, completed, color } = todo;

  const handleStatusChange = (id) => {
    dispatch(toggleStatus(id, completed));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleColorChange = (id, color) => {
    dispatch(changeColor(id, color));
  };

  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="w-5 h-5 rounded border-gray-400 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
        />

        <span
          className={`text-gray-900 dark:text-slate-200 ${
            completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
          }`}
        >
          {text}
        </span>
      </label>

      <div className="flex items-center gap-2">
        {AVAILABLE_COLORS.map((c) => (
          <div
            key={c}
            onClick={() => handleColorChange(id, c)}
            className={cn(
              'w-5 h-5 cursor-pointer rounded-full border-2 transition-all duration-200 hover:scale-105',
              COLOR_CLASSES[c],
              {
                'ring-2 ring-offset-2 ring-gray-600': color === c,
              }
            )}
            title={c}
          ></div>
        ))}

        <Button
          onClick={() => handleDelete(id)}
          className="bg-transparent text-red-600 hover:text-red-700 dark:hover:text-red-400"
          aria-label={`Delete task: ${text}`}
        >
          <Trash size={18} />
        </Button>
      </div>
    </li>
  );
}
