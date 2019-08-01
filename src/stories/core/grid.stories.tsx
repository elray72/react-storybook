import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, {
	StoryContent,
	StoryDemo,
	StoryItem,
	StoryLayout,
} from '../../components/templates/Story';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Grid</h1>
			<p>
				Since the introduction of CSS grids, I've found the need for a
				traditional grid system to be increasingly redundant. Watch this space
				for a new solution that implements CSS grids.
			</p>
		</StoryContent>
	</Story>
);

storiesOf('Foundation|Core', module).add('Grid', StoryComponent);
