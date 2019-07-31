import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryItem, StoryLayout } from '../../templates/Story';
import Arrow, { ArrowType } from './index';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Hamburger</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<StoryItem label="Default">
				<Arrow type={ArrowType.Up} />
			</StoryItem>
			<StoryItem label="Arrow up">
				<Arrow type={ArrowType.Down} />
			</StoryItem>
			<StoryItem label="Arrow down">
				<Arrow type={ArrowType.Left} />
			</StoryItem>
			<StoryItem label="Arrow left">
				<Arrow type={ArrowType.Right} />
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Hamburger', module)
	.add('Default', () => <StoryComponent />);
