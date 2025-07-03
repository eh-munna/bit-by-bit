import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/todos/actions';

export default function TodoForm() {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    setNewTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTask));
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4 gap-2">
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        name="newTask"
        onChange={handleChange}
        className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-300"
      />
      <Button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        aria-label="Add Task"
      >
        <Check size={20} />
      </Button>
    </form>
  );
}
