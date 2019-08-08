import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Story, {
	StoryContent,
	StoryDemo,
	StoryItem,
	StoryLayout,
} from '../../templates/Story';
import Checkbox from './index';

const Ul = styled.ul`
	list-style-type: none;
	li {
		margin-bottom: 1em;
	}
`;

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
			<StoryItem label="Small">
				<br />
				<Checkbox color="primary" size="sm" />
			</StoryItem>
			<StoryItem label="Medium">
				<br />
				<Checkbox color="secondary" size="md" />
			</StoryItem>
			<StoryItem label="Large">
				<br />
				<Checkbox color="tertiary" size="lg" />
			</StoryItem>
		</StoryDemo>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>With labels</h2>
			<br />
			<StoryItem label="Small">
				<br />
				<br />
				<Checkbox
					color="primary"
					size="sm"
					label="Top label"
					labelPosition="top"
				/>
			</StoryItem>
			<StoryItem label="Medium">
				<br />
				<br />
				<Checkbox
					color="secondary"
					size="md"
					label="Right label"
					labelPosition="right"
				/>
			</StoryItem>
			<StoryItem label="Large">
				<br />
				<br />
				<Checkbox
					color="tertiary"
					size="lg"
					label="Bottom label"
					labelPosition="bottom"
				/>
			</StoryItem>
			<StoryItem label="Small">
				<br />
				<br />
				<Checkbox
					color="primary"
					size="sm"
					label="Left label"
					labelPosition="left"
				/>
			</StoryItem>
		</StoryDemo>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Inline checkboxes</h2>
			<br />
			<StoryItem>
				<Ul>
					<li>
						<Checkbox color="red" />
						&nbsp;This is an inline checkbox in red
					</li>
					<li>
						This is an inline checkbox in green &nbsp;
						<Checkbox color="green" />
					</li>
					<li>
						<Checkbox
							color="red"
							label="This is an inline checkbox with the text label on the right (default)"
						/>
					</li>
					<li>
						<Checkbox
							color="green"
							label="This is an inline checkbox with the text label on the left"
							labelPosition="left"
						/>
					</li>
				</Ul>
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Checkboxes', module).add('Default', () => (
	<StoryComponent />
));
