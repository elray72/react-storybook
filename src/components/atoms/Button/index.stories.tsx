import React from 'react';
import { storiesOf } from '@storybook/react';
import Story, {
	StoryContent,
	StoryDemo,
	StoryItem,
	StoryLayout,
} from '../../templates/Story';
import Button, { ButtonType } from './index';

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Button</h1>
			<p>
				You don't really need a description about what buttons are right? Tldr -
				you click them and the app should do something.
			</p>
			<p>
				<strong>To do:</strong> Buttons with icons, Icon buttons, button groups
				and floating buttons
			</p>
		</StoryContent>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Standard buttons</h2>
			<p>
				High emphasis buttons primarily used for CTAs, where you want to prompt
				the user for action.
			</p>
			<br />
			<StoryItem label="Small">
				<br />
				<Button className="button" color="primary" size="sm">
					Primary
				</Button>
			</StoryItem>
			<StoryItem label="Medium">
				<br />
				<Button className="button" color="secondary" size="md">
					Secondary
				</Button>
			</StoryItem>
			<StoryItem label="Large">
				<br />
				<Button className="button" color="tertiary" size="lg">
					Tertiary
				</Button>
			</StoryItem>
		</StoryDemo>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Outline buttons</h2>
			<p>
				Medium emphasis button where the action is secondary to the primary
				function of the app.
			</p>
			<br />
			<StoryItem label="Small">
				<br />
				<Button
					className="button"
					color="primary"
					size="sm"
					type={ButtonType.Outline}
				>
					Primary
				</Button>
			</StoryItem>
			<StoryItem label="Medium">
				<br />
				<Button
					className="button"
					color="secondary"
					size="md"
					type={ButtonType.Outline}
				>
					Secondary
				</Button>
			</StoryItem>
			<StoryItem label="Large">
				<br />
				<Button
					className="button"
					color="tertiary"
					size="lg"
					type={ButtonType.Outline}
				>
					Tertiary
				</Button>
			</StoryItem>
		</StoryDemo>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Text buttons</h2>
			<p>
				Lower emphasis buttons where the action isn't super important or
				optional.
			</p>
			<StoryItem label="Small">
				<br />
				<Button className="button" color="primary" size="sm" type="text">
					Primary
				</Button>
			</StoryItem>
			<StoryItem label="Medium">
				<br />
				<Button className="button" color="secondary" size="md" type="text">
					Secondary
				</Button>
			</StoryItem>
			<StoryItem label="Large">
				<br />
				<Button className="button" color="tertiary" size="lg" type="text">
					Tertiary
				</Button>
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Button', module).add('Default', () => (
	<StoryComponent />
));
