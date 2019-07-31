import * as React from 'react';
import classNames from 'classnames';
import './_arrow.scss';

interface IProps {
	className?: string;
	type?: string;
}

export const ArrowType = {
	Up: 'arrow-up',
	Down: 'arrow-down',
	Left: 'arrow-left',
	Right: 'arrow-right',
};

export const Component: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'arrow');

	return (
		<span className={componentClass}>
			Component
		</span>
	);
};

export default Component;
