import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../components/templates/Page';

const Story = () => (
	<Page className="header--full-width">
		<h1>Overview</h1>
	</Page>
);

storiesOf('Foundation|Overview', module)
	.add('Getting started', Story)
	.add('Documentation', Story);
