import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, { StoryContent } from '../../components/templates/Story';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Typography</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore
				sapiente sint tenetur voluptate!
			</p>
		</StoryContent>
	</Story>
);

storiesOf('Foundation|Core', module).add('Typography', StoryComponent);
