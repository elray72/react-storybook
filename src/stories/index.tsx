import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configure, addDecorator  } from '@storybook/react';
import configureStore from '../store/configureStore';
import 'sanitize.css';
import '../themes/v1/scss/style.scss';

const foundation = require.context('./', true, /\.stories\.tsx$/);
const components = require.context('../components', true, /\.stories\.tsx$/);
const store = configureStore({}, {});

const loadStories = () => {
	foundation.keys().forEach(foundation);
	components.keys().forEach(components);
};

addDecorator(storyFn => (
	<Provider store={store}>
		<BrowserRouter>
			{storyFn()}
		</BrowserRouter>
	</Provider>
));

configure(loadStories, module);
