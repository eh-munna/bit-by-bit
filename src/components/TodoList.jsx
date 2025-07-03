import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, filters } = useSelector((state) => state);
  const { status, colors } = filters;

  const filterByStatus = (todo) => {
    switch (status) {
      case 'complete':
        return todo.completed;
      case 'incomplete': {
        return !todo.completed;
      }
      default:
        return true;
    }
  };

  const filterByColor = (todo) => {
    switch (colors.length) {
      case 0:
        return true;
      default:
        return colors.includes(todo?.color);
    }
  };

  if (todos.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-center mb-4">
        No tasks to show
      </p>
    );
  }

  return (
    <ul className="mb-4 space-y-2 max-h-96 overflow-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColor)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
  );
}
