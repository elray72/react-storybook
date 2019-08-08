import React from 'react';
import { storiesOf } from '@storybook/react';
import { AddressBook } from '../Icon';
import Story, {
	StoryContent,
	StoryCode,
	StoryDemo,
	StoryItem,
	StoryLayout,
} from '../../templates/Story';
import Bell from "./icons/Bell";

const StoryComponent = () => (
	<Story>
		<StoryContent>
			<h1>Icons</h1>
			<p>
				Icons will be rendered in their inline <code>&lt;svg&gt;</code> form to
				enable manipulation via js or css (for example fill colours). This is
				achieved through the{' '}
				<a href="https://github.com/gilbarbara/react-inlinesvg" target="_blank"> 
					{' '}
					react-inlinesvg
				</a>{' '}
				library.
			</p>
			<p>
				More information including a complete list of icons is available on the
				iconography page.
			</p>
			<p>
				To do: As a button, within a button.
			</p>
		</StoryContent>
		<StoryCode>
			<code>
				<em className="keyword">import</em> &#123; Facebook, Twitter, Instagram
				&#125; <em className="keyword">from</em>{' '}
				<em className="string">'@material-ui/icons'</em>;
			</code>
		</StoryCode>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Basic usage</h2>
			<br />
			<StoryItem label="Size = 32">
				<br />
				<AddressBook size={32} />
			</StoryItem>
			<StoryItem label="Size = 40">
				<br />
				<AddressBook size={40} />
			</StoryItem>
			<StoryItem label="Size = 48">
				<br />
				<AddressBook size={48} />
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Icons', module).add('Default', () => (
	<StoryComponent />
));
