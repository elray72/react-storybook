import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryItem, StoryLayout } from '../../templates/Story';
import Button, { ButtonType } from './index';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Button</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Standard buttons</h2>
			<br />
			<StoryItem label="Primary Sm">
				<br/>
				<Button className="button" color="primary" size="sm">Primary</Button>
			</StoryItem>
			<StoryItem label="Secondary Md">
				<br/>
				<Button className="button" color="secondary" size="md">Secondary</Button>
			</StoryItem>
			<StoryItem label="Tertiary Lg">
				<br/>
				<Button className="button" color="tertiary" size="lg">Tertiary</Button>
			</StoryItem>
		</StoryDemo>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Outline buttons</h2>
			<br />
			<StoryItem label="Primary Sm">
				<br/>
				<Button className="button" color="primary" size="sm" type={ButtonType.Outline}>Primary</Button>
			</StoryItem>
			<StoryItem label="Secondary Md">
				<br/>
				<Button className="button" color="secondary" size="md" type={ButtonType.Outline}>Secondary</Button>
			</StoryItem>
			<StoryItem label="Tertiary Lg">
				<br/>
				<Button className="button" color="tertiary" size="lg" type={ButtonType.Outline}>Tertiary</Button>
			</StoryItem>
		</StoryDemo>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Text buttons</h2>
			<br />
			<StoryItem label="Primary Sm">
				<br/>
				<Button className="button" color="primary" size="sm" type="text">Primary</Button>
			</StoryItem>
			<StoryItem label="Secondary Md">
				<br/>
				<Button className="button" color="secondary" size="md" type="text">Secondary</Button>
			</StoryItem>
			<StoryItem label="Tertiary Lg">
				<br/>
				<Button className="button" color="tertiary" size="lg" type="text">Tertiary</Button>
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Button', module)
	.add('Default', () => <StoryComponent />);
