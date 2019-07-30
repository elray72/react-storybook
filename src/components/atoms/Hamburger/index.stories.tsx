import React from 'react';
import { storiesOf } from '@storybook/react';
import Button, { HamburgerType } from './index';
import styled from 'styled-components';

const NavButton = styled(Button)`
	height: 60px;
	width: 60px;
	margin: 8px;
`;

// Navigation
storiesOf('Navigation|Hamburger', module)
	.add('Default', () => <NavButton type={HamburgerType.Default} />)
	.add('Arrow up', () => <NavButton type={HamburgerType.ArrowUp} />)
	.add('Arrow down', () => <NavButton type={HamburgerType.ArrowDown} />)
	.add('Arrow left', () => <NavButton type={HamburgerType.ArrowLeft} />)
	.add('Arrow right', () => <NavButton type={HamburgerType.ArrowRight} />);

// Component
storiesOf('Components|Atoms/Hamburger', module)
	.add('Default', () => <NavButton type={HamburgerType.Default} />)
	.add('Arrow up', () => <NavButton type={HamburgerType.ArrowUp} />)
	.add('Arrow down', () => <NavButton type={HamburgerType.ArrowDown} />)
	.add('Arrow left', () => <NavButton type={HamburgerType.ArrowLeft} />)
	.add('Arrow right', () => <NavButton type={HamburgerType.ArrowRight} />);
