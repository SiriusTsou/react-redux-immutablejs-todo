import React, { PropTypes } from 'react';

const TodoList = ({
  todos,
  actions,
}) => (
  <div>
    <ul>
    {
      todos.map((todo, index) => (
        <li key={index}>
          {todo.get('text')}
          <button onClick={() => (actions.onDeleteTodo(index))}>X</button>
        </li>
      ))
    }
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.any,
  actions: PropTypes.object,
};

TodoList.defaultProps = {
  todos: {},
  actions: {},
};

export default TodoList;
