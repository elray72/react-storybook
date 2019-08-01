import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryItem, StoryLayout } from '../../templates/Story';
import Button from './index';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Button</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<StoryItem label="Primary">
				<br/>
				<Button className="button" theme="primary">Primary</Button>
			</StoryItem>
			<StoryItem label="Secondary">
				<Button className="button" theme="secondary">Secondary</Button>
			</StoryItem>
			<StoryItem label="Tertiary">
				<Button className="button" theme="tertiary">Tertiary</Button>
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Button', module)
	.add('Default', () => <StoryComponent />);
