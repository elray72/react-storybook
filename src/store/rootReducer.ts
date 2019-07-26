import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
//import toDos from '../examples/ToDo/reducers/toDos';
import visibilityFilter from '../examples/ToDo/reducers/visibilityFilter';
import nav from '../components/organisms/Nav/_reducer';

export default (history: any) =>
	combineReducers({
		router: connectRouter(history),
		nav,
		//toDos,
		visibilityFilter,
	});
