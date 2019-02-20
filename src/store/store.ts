import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

// const middlewares = [ thunk ];

// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(logger);
// }

const configureStore = (preloadedState: any = {}): any => createStore(
  rootReducer,
  preloadedState,
  // applyMiddleware(thunk)
);

export default configureStore;