import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import ToDoList from '../components/ToDoList';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (toDos: any, filter: any) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return toDos;
		case VisibilityFilters.SHOW_COMPLETED:
			return toDos.filter((t: any) => t.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return toDos.filter((t: any) => !t.completed);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
};

const mapStateToProps = (state: any) => ({
	toDos: getVisibleTodos(state.toDos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: any) => ({
	toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ToDoList);
