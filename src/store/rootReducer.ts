import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import toDos from '../examples/ToDo/reducers/toDos';
import visibilityFilter from '../examples/ToDo/reducers/visibilityFilter';
import wizard from '../components/organisms/Wizard/reducers';

export default (history: any) =>
	combineReducers({
		router: connectRouter(history),
		toDos,
		wizard,
		visibilityFilter,
	});
