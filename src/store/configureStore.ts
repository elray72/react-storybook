import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from './rootReducer';

const configureStore = (initialState: any, history: any) => {
	return createStore(
		rootReducer(history),
		initialState,
		compose(
			applyMiddleware(
				routerMiddleware(history),
				thunkMiddleware,
				loggerMiddleware,
			),
		),
	);
};

export default configureStore;
