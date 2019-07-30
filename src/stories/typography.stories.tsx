import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../components/templates/Page';

storiesOf('Foundation|Typography', module)
	.add('Default', () => (
		<Page className="header--full-width">
			<h1>Typography</h1>
		</Page>
	));
