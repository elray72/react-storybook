import React from 'react';
import { storiesOf } from '@storybook/react';
import NavButton, { NavButtonType } from './index';

// Navigation
storiesOf('Navigation|NavButton', module)
	.add('Default', () => <NavButton type={NavButtonType.Default} />)
	.add('Arrow up', () => <NavButton type={NavButtonType.ArrowUp} />)
	.add('Arrow down', () => <NavButton type={NavButtonType.ArrowDown} />)
	.add('Arrow left', () => <NavButton type={NavButtonType.ArrowLeft} />)
	.add('Arrow right', () => <NavButton type={NavButtonType.ArrowRight} />);

// Component
storiesOf('Components|Atoms/NavButton', module)
	.add('Default', () => <NavButton type={NavButtonType.Default} />)
	.add('Arrow up', () => <NavButton type={NavButtonType.ArrowUp} />)
	.add('Arrow down', () => <NavButton type={NavButtonType.ArrowDown} />)
	.add('Arrow left', () => <NavButton type={NavButtonType.ArrowLeft} />)
	.add('Arrow right', () => <NavButton type={NavButtonType.ArrowRight} />);
