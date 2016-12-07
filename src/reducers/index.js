import todo from './todo/todoReducer';

import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
