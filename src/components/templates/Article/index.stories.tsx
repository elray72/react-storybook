import React from 'react';
import { storiesOf } from '@storybook/react';
import Story from '../Story';
import Component from './index';

const StoryComponent = () => (
	<Story>
		<Component>
			<h1>Article</h1>
		</Component>
	</Story>
);

// Component
storiesOf('Components|Templates/Article', module)
	.add('Default', () => <StoryComponent />);
