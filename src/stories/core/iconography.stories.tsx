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
			<h1>Iconography</h1>
			<p>
				This design system uses icons from the free version of
				<a href="https://github.com/FortAwesome/">Font Awesome</a>.
			</p>
		</StoryContent>
	</Story>
);

storiesOf('Foundation|Core', module).add('Iconography', StoryComponent);
