import React, { PropTypes } from 'react';

const TodoHeader = ({
  actions,
  todo,
}) => (
  <div>
    <h1>TodoHeader</h1>
    <input type="text" value={todo.get('text')} onChange={actions.onSetTodo} />
    <button onClick={actions.onCreateTodo}>送出</button>
  </div>
);

TodoHeader.propTypes = {
  actions: PropTypes.object,
  todo: PropTypes.object,
};

TodoHeader.defaultProps = {
  todo: {},
  actions: {},
};

export default TodoHeader;
