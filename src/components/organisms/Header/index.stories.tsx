import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Header from './index';
import HeaderLogo from '../../atoms/Logo'
import Nav from '../Nav';
import NavButton from '../../atoms/Hamburger';
import RLogo from '../../../../public/assets/img/r-logo-alt.svg';

const HeaderNav = styled((props) => (
	<Nav {...props}>
		<button className="nav__link">Home</button>
		<button className="nav__link">Our work</button>
		<button className="nav__link">What we do</button>
		<button className="nav__link">News</button>
		<button className="nav__link">Insights</button>
		<button className="nav__link">Contact us</button>
	</Nav>
))`
	margin-left: em(8);
	margin-right: auto;
`;

const HeaderNavButton = styled(NavButton)`
	margin-left: auto;
	.hamburger__bar {
		background: #fff;
	}
`;

storiesOf('Components|Organisms/Header', module)
	.add('Default', () => (
		<Header className="header--full-width">
			<HeaderLogo className="header__logo" src={RLogo} title="R logo" />
			<HeaderNav className="header__nav" marker={true} />
			<HeaderNavButton className="header__hamburger" />
		</Header>
	));
