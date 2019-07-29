import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './index';

// Component
storiesOf('Components|Atoms/Logo', module)
	.add('Default', () => <Logo src="/assets/img/r-logo.svg" title="R Logo" />);
