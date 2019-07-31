import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryItem, StoryLayout } from '../../templates/Story';
import Arrow, { ArrowType } from './index';
const P = styled.p`
	font-size: 30px;
	border: 1px dashed blue;
`;


const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Arrow</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<StoryItem label="Arrow up">
				<P>A.
					<Arrow type={ArrowType.Up} />
				</P>
			</StoryItem>
			<StoryItem label="Arrow down">
				<Arrow type={ArrowType.Down} />
			</StoryItem>
			<StoryItem label="Arrow left">
				<Arrow type={ArrowType.Left} />
			</StoryItem>
			<StoryItem label="Arrow right">
				<Arrow type={ArrowType.Right} />
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Arrow', module)
	.add('Default', () => <StoryComponent />);
