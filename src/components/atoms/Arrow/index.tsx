import * as React from 'react';
import classNames from 'classnames';
import './_arrow.scss';

interface IProps {
	className?: string;
	size?: string;
	type?: string;
}

export const ArrowSize = {
	Inline: 'inline',
	Small: 'sm',
	Medium: 'md',
	Large: 'lg',
};

export const ArrowType = {
	Up: 'arrow-up',
	Down: 'arrow-down',
	Left: 'arrow-left',
	Right: 'arrow-right',
};

export const Component: React.FC<IProps> = (props) => {
	const arrowClass = props.type ? `arrow--${props.type}`  : null;
	const arrowSize = props.type ? `arrow--${props.type}`  : 'arrow--in';
	const componentClass = classNames(props.className, 'arrow', arrowClass);

	return (
		<span className={componentClass} />
	);
};

export default Component;
