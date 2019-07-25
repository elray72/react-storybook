import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Header from './index';
import Nav from '../../organisms/Nav';
import NavButton from '../../atoms/NavButton';

const Link = styled.a`
	cursor: pointer;
`;

const HeaderNav = styled(() => (
	<Nav>
		<Link className="nav__link">Home</Link>
		<Link className="nav__link">About</Link>
	</Nav>
))`
	margin-right: auto;
`;

const HeaderNavButton = styled(NavButton)`
	margin-left: auto;
	.nav-button__bar {
		background: #fff;
	}
`;

storiesOf('Components|Organisms/Header', module)
	.add('Default', () => (
		<Header className="header--full-width">
			<HeaderNavButton />
			<HeaderNav />
		</Header>
	));
