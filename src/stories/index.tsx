import { configure } from '@storybook/react';
import '../themes/v1/scss/style.scss';

const components = require.context('../', true, /\.stories\.tsx$/);

const loadStories = () => {
	components.keys().forEach(components);
};

configure(loadStories, module);
