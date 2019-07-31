import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryComponent } from '../../templates/Story';
import Arrow from './index';

const StoryPage = () => (
	<Story>
		<StoryContent>
			<h1>Arrow</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo>
			<Arrow />
			<Arrow />
			<Arrow />
			<Arrow />
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Arrow', module)
	.add('Default', () => <StoryPage />);
