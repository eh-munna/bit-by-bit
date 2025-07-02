import { rootReducer } from '../rootReducer';

export default function logNext(store) {
  return (next) => (action) => {
    const result = [action].reduce(rootReducer, store.getState());
    console.log('Next State', result);
    return next(action);
  };
}
