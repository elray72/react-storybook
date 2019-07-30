import React from 'react';
import { storiesOf } from '@storybook/react';
import Story from '../../templates/Story';
import Component, {componentName} from './index';

const Story = () => (
	<Page className="header--full-width">
		<h1>Core</h1>
	</Page>
);

// Component
storiesOf('Components|Atoms/Base', module)
	.add('Default', () => <Logo src="/assets/img/r-logo.svg" title="R Logo" />);
