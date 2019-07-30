import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../components/templates/Page';

const Story = () => (
	<Page className="header--full-width">
		<h1>Core</h1>
	</Page>
);

storiesOf('Foundation|Core', module)
	.add('Configuration', Story)
	.add('Colour', Story)
	.add('Common', Story)
	.add('Grid', Story)
	.add('Iconography', Story)
	.add('Layout', Story)
	.add('Typography', Story);
