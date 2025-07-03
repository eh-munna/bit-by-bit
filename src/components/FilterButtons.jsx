import { XCircle } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/reducers/filters/actions';
import { clearCompleted, completeAll } from '../redux/reducers/todos/actions';
import { cn } from '../utils/cn';
import Button from './ui/Button';

const FILTERS = ['all', 'incomplete', 'complete'];
const AVAILABLE_COLORS = ['red', 'green', 'yellow'];

const COLOR_CLASSES = {
  red: 'bg-red-500 border-red-600',
  green: 'bg-green-500 border-green-600',
  yellow: 'bg-yellow-400 border-yellow-500',
};

export default function FilterButtons() {
  const dispatch = useDispatch();
  const { todos, filters } = useSelector((state) => state);
  const { status, colors } = filters;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color) => {
    const isExist = colors.includes(color);

    if (isExist) {
      dispatch(colorChanged('remove', color));
      return;
    }
    dispatch(colorChanged('add', color));
  };

  const handleCompleteAll = () => {
    dispatch(completeAll(true));
  };

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  const hasNoCompleted = todos.every((todo) => !todo.completed);
  const taskLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <h2 className="text-lg font-medium text-gray-900 dark:text-slate-100 my-2">
        {taskLeft === 0
          ? null
          : `${taskLeft} task${taskLeft > 1 ? 's' : ''} left`}
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm">
        {/* Filter Type Buttons */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((key) => (
            <button
              key={key}
              onClick={() => handleStatusChange(key)}
              className={cn(
                'px-4 py-1 rounded-md text-sm font-medium capitalize transition-colors duration-200',
                status === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              )}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Color Filter Boxes */}
        <div className="flex items-center gap-3">
          {AVAILABLE_COLORS.map((c) => (
            <div
              onClick={() => handleColorChange(c)}
              key={c}
              className={cn(
                'w-5 h-5 cursor-pointer rounded-full border-2 transition-all duration-200 hover:scale-105',
                COLOR_CLASSES[c],
                {
                  'ring-2 ring-offset-2 ring-blue-500': colors.includes(c),
                }
              )}
              title={`Filter by ${c}`}
            ></div>
          ))}
        </div>

        <Button
          onClick={handleCompleteAll}
          disabled={todos.length === 0}
          className={cn(
            'flex items-center gap-1 px-4 py-1 text-sm font-medium rounded-md transition-colors duration-200 bg-red-500 text-white hover:hover:bg-blue-700 disabled:hover:bg-blue-700  disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed'
          )}
        >
          <XCircle size={18} />
          Complete All
        </Button>
        <Button
          onClick={handleClear}
          disabled={hasNoCompleted}
          className={cn(
            'flex items-center gap-1 px-4 py-1 text-sm font-medium rounded-md transition-colors duration-200',
            hasNoCompleted
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-blue-700'
          )}
        >
          <XCircle size={18} />
          Clear Completed
        </Button>
      </div>
    </>
  );
}
