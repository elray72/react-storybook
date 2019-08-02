import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryItem, StoryLayout } from '../../templates/Story';
import BadgeContainer from './index';
import Button from '../Button';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Button</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<br /><br />
			<StoryItem label="Primary">
				<BadgeContainer value={9}>
					<Button className="button" color="primary">Primary</Button>
				</BadgeContainer>
			</StoryItem>
			<StoryItem label="Secondary">
				<BadgeContainer value={99}>
					<Button className="button" color="primary">Primary</Button>
				</BadgeContainer>
			</StoryItem>
			<StoryItem label="Tertiary">
				<BadgeContainer value={100} max={99}>
					<Button className="button" color="primary">Primary</Button>
				</BadgeContainer>
			</StoryItem>
			<StoryItem label="Tertiary">
				<BadgeContainer value="New">
					<Button className="button" color="primary">Primary</Button>
				</BadgeContainer>
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Badge', module)
	.add('Default', () => <StoryComponent />);
