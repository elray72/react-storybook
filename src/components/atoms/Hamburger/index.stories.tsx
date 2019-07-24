import React from 'react';
import { storiesOf } from '@storybook/react';
import Hamburger, { HamburgerTypes } from './index';

storiesOf('Components|Atoms/Hamburger', module)
	.add('Default', () => <Hamburger type={HamburgerTypes.Default} />)
	.add('Arrow up', () => <Hamburger type={HamburgerTypes.ArrowUp} />)
	.add('Arrow down', () => <Hamburger type={HamburgerTypes.ArrowDown} />)
	.add('Arrow left', () => <Hamburger type={HamburgerTypes.ArrowLeft} />)
	.add('Arrow right', () => <Hamburger type={HamburgerTypes.ArrowRight} />);
