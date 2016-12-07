import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';
import * as todoActions from '../../reducers/todo/todoActions';

const mapStateToProps = (state) => ({
  // 從 store 取得 todo state
  todo: state.getIn(['todo', 'todo']),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoHeader);
