import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, {
	StoryContent,
	StoryDemo,
	StoryLayout,
} from '../../components/templates/Story';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Button</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in, labore
				sapiente sint tenetur voluptate!
			</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
				magnam quasi quod repellat repudiandae ullam.
			</p>
		</StoryDemo>
	</Story>
);

storiesOf('Foundation|Core', module).add('Colours', StoryComponent);
