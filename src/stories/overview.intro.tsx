import React from 'react';
import { storiesOf } from '@storybook/react';
import Story from '../components/templates/Story';

const GettingStarted = () => (
	<Story>
		<h1>Overview</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
			minima qui reprehenderit. Consequatur dignissimos esse impedit iure labore
			nemo nisi nostrum tenetur unde voluptatem! Dolorum ea enim eos inventore.
		</p>
	</Story>
);

const Documentation = () => (
	<Story>
		<h1>Documentation</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
			minima qui reprehenderit. Consequatur dignissimos esse impedit iure labore
			nemo nisi nostrum tenetur unde voluptatem! Dolorum ea enim eos inventore.
		</p>
	</Story>
);

storiesOf('Foundation|Overview', module)
	.add('Getting started', GettingStarted)
	.add('Documentation', Documentation);
