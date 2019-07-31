import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './_story.scss';

interface IProps {
	children?: ReactNode;
}

interface IStoryDemo {
	children?: ReactNode;
	layout?: string,
}

interface IStoryComponent {
	children?: ReactNode;
	label?: string,
}

export const StoryLayout = {
	Rows: 'rows'
};

export const StoryContent: React.FC<IProps> = (props) => {
	return (
		<div className="story__content">
			{props.children}
		</div>
	)
};

export const StoryDemo: React.FC<IStoryDemo> = (props) => {
	const layoutClass = props.layout ? `story__demo--${props.layout}` : null;
	const componentClass = classNames('story__demo', layoutClass);

	return (
		<div className={componentClass}>
			{props.children}
		</div>
	)
};

export const StoryComponent: React.FC<IStoryComponent> = (props) => {

	return (
		<div className="story__component">
			{props.children}
		</div>
	)
};

export const Story: React.FC<IProps> = (props) => {

	return (
		<div className="story">
			<div className="story__inner">
				{props.children}
			</div>
		</div>
	)
};

export default Story;
