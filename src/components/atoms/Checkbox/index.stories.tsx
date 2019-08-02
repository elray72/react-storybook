import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, {
	StoryContent,
	StoryDemo,
	StoryItem,
	StoryLayout,
} from '../../templates/Story';
import Checkbox from './index';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Checkboxes</h1>
			<p>
				This version of the checkboxes will be used outside of forms. A specific
				version for forms is available in the forms section.
			</p>
			<p>
				<strong>To do:</strong> Icon checkboxes, Label variations
			</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Without labels</h2>
			<br />
			<StoryItem label="Small">
				<br />
				<Checkbox color="primary" size="sm">
					Primary
				</Checkbox>
			</StoryItem>
			<StoryItem label="Medium">
				<br />
				<Checkbox color="primary" size="md">
					Primary
				</Checkbox>
			</StoryItem>
			<StoryItem label="Large">
				<br />
				<Checkbox color="primary" size="lg">
					Primary
				</Checkbox>
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Checkbox', module).add('Default', () => (
	<StoryComponent />
));
