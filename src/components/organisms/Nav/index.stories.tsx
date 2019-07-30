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
storiesOf('Components|Organisms/Nav', module)
	.add('Default', () => <StoryComponent />);
