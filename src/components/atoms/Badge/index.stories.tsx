import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryItem, StoryLayout } from '../../templates/Story';
import BadgeContainer from './index';
import Button from '../Button';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Badges</h1>
			<p>Badges are used </p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<br/><br/>
			<StoryItem label="Primary">
				<br/>
				<BadgeContainer value={9}>
					<Button className="button" color="primary">Primary</Button>
				</BadgeContainer>
			</StoryItem>
			<StoryItem label="Secondary">
				<br/>
				<BadgeContainer value={99}>
					<Button className="button" color="primary">Primary</Button>
				</BadgeContainer>
			</StoryItem>
			<StoryItem label="Tertiary">
				<br/>
				<BadgeContainer value={100} max={99}>
					<Button className="button" color="primary">Primary</Button>
				</BadgeContainer>
			</StoryItem>
			<StoryItem label="Tertiary">
				<br/>
				<BadgeContainer value="New">
					<Button className="button" color="primary">Primary</Button>
				</BadgeContainer>
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Badges', module)
	.add('Default', () => <StoryComponent />);
