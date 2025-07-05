export const loadTodo = (todos) => {
  return {
    type: 'LOAD_TODOS',
    payload: todos,
  };
};

export const fetchTodos = () => async (dispatch) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );
  const todos = await response.json();
  dispatch(loadTodo(todos));
};
