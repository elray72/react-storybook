import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryItem, StoryLayout } from '../../templates/Story';
import Hamburger, { HamburgerType } from './index';
import styled from 'styled-components';

const SHamburger = styled(Hamburger)`
	height: 60px;
	width: 60px;
`;

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Hamburger</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<StoryItem label="Default">
				<SHamburger type={HamburgerType.Default} />
			</StoryItem>
			<StoryItem label="Arrow up">
				<SHamburger type={HamburgerType.ArrowUp} />
			</StoryItem>
			<StoryItem label="Arrow down">
				<SHamburger type={HamburgerType.ArrowDown} />
			</StoryItem>
			<StoryItem label="Arrow left">
				<SHamburger type={HamburgerType.ArrowLeft} />
			</StoryItem>
			<StoryItem label="Arrow right">
				<SHamburger type={HamburgerType.ArrowRight} />
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Hamburger', module)
	.add('Default', () => <StoryComponent />);
