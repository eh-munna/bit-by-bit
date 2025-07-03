import FilterButtons from './FilterButtons';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TaskBoard() {
  // const [filter, setFilter] = useState('all');

  // const toggleComplete = (id) => {
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  // const deleteTodo = (id) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

  // const clearCompleted = () => {
  //   setTodos((prev) => prev.filter((todo) => !todo.completed));
  // };

  // const filteredTodos = todos.filter((todo) => {
  //   if (filter === 'complete') return todo.completed;
  //   if (filter === 'incomplete') return !todo.completed;
  //   return true;
  // });

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
