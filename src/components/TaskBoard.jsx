import FilterButtons from './FilterButtons';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TaskBoard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-slate-100">
        Task Board
      </h1>

      <TodoForm />
      <TodoList />
      <FilterButtons />
    </div>
  );
}
