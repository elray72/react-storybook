import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Header from './index';
import Nav from '../Nav';
import NavButton from '../../atoms/NavButton';

const HeaderNav = styled(() => (
	<Nav className="header__nav">
		<button className="nav__link">Home</button>
		<button className="nav__link">About</button>
	</Nav>
))`
	margin-left: em(8);
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
			<HeaderNav />
			<HeaderNavButton />
		</Header>
	));
