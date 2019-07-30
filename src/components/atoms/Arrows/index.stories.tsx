import React from 'react';
import { storiesOf } from '@storybook/react';
import Arrows, { CaretType } from './index';

// Component
storiesOf('Components|Atoms/Arrows', module)
	.add('Default', () => <Arrows type={CaretType.UpDown} />);
