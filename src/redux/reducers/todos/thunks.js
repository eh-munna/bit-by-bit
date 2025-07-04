import {
  add,
  deleteTodo,
  loaded,
  selectColor,
  toggleComplete,
} from './actions';

export const fetchTodos = async (dispatch) => {
  const response = await fetch('http://localhost:9000/todos');
  const data = await response.json();
  dispatch(loaded(data));
};

export const addTodo = (task) => async (dispatch) => {
  if (!task.trim()) return;

  const newTask = {
    id: crypto.randomUUID(),
    completed: false,
    text: task,
  };
  const response = await fetch('http://localhost:9000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  });
  const data = await response.json();
  dispatch(add(data));
};

export const toggleStatus = (todoId, status) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed: !status,
    }),
  });
  const data = await response.json();
  dispatch(toggleComplete(data.id));
};

export const changeColor = (todoId, color) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      color: color,
    }),
  });

  const data = await response.json();

  dispatch(selectColor(data.id, data.color));
};

export const removeTodo = (todoId) => async (dispatch) => {
  await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: 'DELETE',
  });
  dispatch(deleteTodo(todoId));
};
