export const fetchTodos = (store) => (next) => async (action) => {
  if (action.type === 'todos/FETCH_TODOS') {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=1'
    );
    const data = await response.json();

    store.dispatch({
      type: 'todos/LOAD_TODO',
      payload: data,
    });

    return;
  }

  return next(action);
};
