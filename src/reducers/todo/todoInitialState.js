import { Record } from 'immutable' ;

const Todo = Record({
  id: null,
  text: '',
  updatedAt: null,
  completed: false,
});

const InitialState = Record({
  todos: [],
  todo: new Todo(),
});

export default InitialState ;
