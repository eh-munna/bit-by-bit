export default function logger(store) {
  return (next) => (action) => {
    console.log('Current State:', store.getState());
    console.log('Dispatching Action', action);
    const result = next(action);
    return result;
  };
}
