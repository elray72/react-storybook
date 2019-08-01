import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent } from '../components/templates/Story';

const GettingStarted = () => (
	<Story>
		<StoryContent>
			<h1>Getting started</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
				minima qui reprehenderit. Consequatur dignissimos esse impedit iure labore
				nemo nisi nostrum tenetur unde voluptatem! Dolorum ea enim eos inventore.
			</p>
		</StoryContent>
	</Story>
);

const Documentation = () => (
	<Story>
		<StoryContent>
			<h1>Documentation</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
				minima qui reprehenderit. Consequatur dignissimos esse impedit iure labore
				nemo nisi nostrum tenetur unde voluptatem! Dolorum ea enim eos inventore.
			</p>
		</StoryContent>
	</Story>
);

storiesOf('Foundation|Overview', module)
	.add('Getting started', GettingStarted)
	.add('Documentation', Documentation);
