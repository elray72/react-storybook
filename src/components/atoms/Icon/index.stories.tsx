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
		</StoryContent>
		<StoryCode>
			<code>
				<em className="keyword">import</em> &#123; Facebook, Twitter, Instagram
				&#125; <em className="keyword">from</em>{' '}
				<em className="string">'@material-ui/icons'</em>;
			</code>
		</StoryCode>
		<StoryDemo layout={StoryLayout.Rows}>
			<h2>Without labels</h2>
			<StoryItem label="Small">
				<AddressBook />
			</StoryItem>
		</StoryDemo>
	</Story>
);

// Component
storiesOf('Components|Atoms/Icon', module).add('Default', () => (
	<StoryComponent />
));
