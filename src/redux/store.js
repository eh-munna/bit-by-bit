import { applyMiddleware, createStore } from 'redux';
import logger from './middlewares/logger';
import logNext from './middlewares/logNext';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, applyMiddleware(logger, logNext));
