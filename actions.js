const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=1'
  );
  const data = await response.json();

  dispatch({
    type: 'todos/LOAD_TODO',
    payload: data,
  });
};

export default fetchTodos;
