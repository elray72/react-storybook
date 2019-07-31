import * as React from 'react';
import classNames from 'classnames';

interface IProps {
	className?: string;
}

export const Component: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, '');

	return (
		<div className={componentClass}>
			Component
		</div>
	);
};

export default Component;
