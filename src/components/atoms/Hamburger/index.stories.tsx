import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent, StoryDemo, StoryLayout } from '../../templates/Story';
import Component, { HamburgerType } from './index';

const Hamburger = styled(Component)`
	height: 60px;
	width: 60px;
	margin: 8px;
`;
//
// // Navigation
// storiesOf('Navigation|Hamburger', module)
// 	.add('Default', () => <NavButton type={HamburgerType.Default} />)
// 	.add('Arrow up', () => <NavButton type={HamburgerType.ArrowUp} />)
// 	.add('Arrow down', () => <NavButton type={HamburgerType.ArrowDown} />)
// 	.add('Arrow left', () => <NavButton type={HamburgerType.ArrowLeft} />)
// 	.add('Arrow right', () => <NavButton type={HamburgerType.ArrowRight} />);

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Hamburger</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore sapiente sint tenetur voluptate!</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<Hamburger type={HamburgerType.Default} />
			<Hamburger type={HamburgerType.Default} />
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Hamburger', module)
	.add('Default', () => <StoryComponent />);
//
//
//
//
// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import Button, { HamburgerType } from './index';
// import styled from 'styled-components';
//

//
// // Component
// storiesOf('Components|Atoms/Hamburger', module)
// 	.add('Default', () => <NavButton type={HamburgerType.Default} />)
// 	.add('Arrow up', () => <NavButton type={HamburgerType.ArrowUp} />)
// 	.add('Arrow down', () => <NavButton type={HamburgerType.ArrowDown} />)
// 	.add('Arrow left', () => <NavButton type={HamburgerType.ArrowLeft} />)
// 	.add('Arrow right', () => <NavButton type={HamburgerType.ArrowRight} />);
