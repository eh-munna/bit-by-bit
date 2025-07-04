import {
  ADD,
  CLEAR_COMPLETED,
  COMPLETED_ALL,
  DELETE,
  LOADED,
  SELECTED_COLOR,
  TOGGLE,
} from './actionTypes';

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};
export const add = (task) => {
  return {
    type: ADD,
    payload: task,
  };
};

export const toggleComplete = (id) => {
  return {
    type: TOGGLE,
    payload: id,
  };
};

export const selectColor = (todoId, color) => {
  return {
    type: SELECTED_COLOR,
    payload: { todoId, color },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const completeAll = (isCompleted) => {
  return {
    type: COMPLETED_ALL,
    payload: isCompleted,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
