import ActionTypes from '../../lib/constants' ;
import uuid from 'uuid';

export const onSetTodo = (event) => ({
  type: ActionTypes.SET_TODO,
  payload: {
    text:event.target.value,
  },
});

export const onCreateTodo = () => ({
  type: ActionTypes.CREATE_TODO,
  payload: {
    id: uuid.v4(), 
    updatedAt: Date.now(),
  },
});

export const onDeleteTodo = (index) => ({
  type: ActionTypes.DELETE_TODO,
  payload: {
    index: index,
  },
});
