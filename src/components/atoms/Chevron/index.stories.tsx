import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryItem, StoryLayout } from '../../templates/Story';
import Chevron, { ChevronType, ChevronSize } from './index';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Chevron</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<StoryItem label="Chevron up">
					<Chevron animate={true} type={ChevronType.Up} size={ChevronSize.XLarge} />
			</StoryItem>
			<StoryItem label="Chevron down">
					<Chevron animate={true} type={ChevronType.Down} size={ChevronSize.XLarge} />
			</StoryItem>
			<StoryItem label="Chevron left">
				<Chevron animate={true} type={ChevronType.Left} size={ChevronSize.XLarge} />
			</StoryItem>
			<StoryItem label="Chevron right">
				<Chevron animate={true} type={ChevronType.Right} size={ChevronSize.XLarge} />
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Chevron', module)
	.add('Default', () => <StoryComponent />);
