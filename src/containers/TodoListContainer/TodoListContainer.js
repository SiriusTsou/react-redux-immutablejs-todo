import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import * as todoActions from '../../reducers/todo/todoActions';

const mapStateToProps = (state) => ({
  todos: state.getIn(['todo', 'todos']),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
