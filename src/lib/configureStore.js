import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(createLogger({ stateTransformer: state => state.toJS() })),
);
