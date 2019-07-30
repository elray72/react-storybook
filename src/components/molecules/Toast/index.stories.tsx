import React from 'react';
import { storiesOf } from '@storybook/react';
import Story from '../../templates/Story';
import Component from './index';

const StoryComponent = () => (
	<Story>
		<Component />
	</Story>
);

// Component
storiesOf('Components|Molecules/Toast', module)
	.add('Default', () => <StoryComponent />);
