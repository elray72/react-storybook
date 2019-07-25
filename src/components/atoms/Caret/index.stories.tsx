import React from 'react';
import { storiesOf } from '@storybook/react';
import Caret, { CaretType } from './index';

// Component
storiesOf('Components|Atoms/Caret', module)
	.add('Default', () => <Caret type={CaretType.UpDown} />);
