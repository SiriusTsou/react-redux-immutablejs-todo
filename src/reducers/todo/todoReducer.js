import { handleActions } from 'redux-actions';
import InitialState from './todoInitialState';
import ActionTypes from '../../lib/constants' ;

const initialState = new InitialState();

const todoReducers = handleActions({
  [ActionTypes.CREATE_TODO]: (state, { payload }) => {
    const id = payload.id;
    const updatedAt = payload.updatedAt;
    const newState = state.setIn(['todo', 'id'], id)
                          .setIn(['todo', 'updatedAt'], updatedAt);
    const todos = state.get('todos').concat(newState.get('todo')); 
    return state.set('todos', todos)
                .setIn(['todo', 'text'], ''); 
  },
  [ActionTypes.DELETE_TODO]: (state, { payload }) => {
    const deleteTodo = state.get('todos')[payload.index];
    const todos = state.get('todos').filter((o) => o !== deleteTodo);
    return state.set('todos', todos);
  },
  [ActionTypes.SET_TODO]: (state, { payload }) => (
    state.setIn(['todo', 'text'], payload.text)
  ),
}, initialState);

export default todoReducers;
