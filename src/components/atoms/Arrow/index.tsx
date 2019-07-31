import * as React from 'react';
import classNames from 'classnames';
import './_arrow.scss';

interface IProps {
	className?: string;
}

export const Component: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'arrow');

	return (
		<span className={componentClass}>
			Component
		</span>
	);
};

export default Component;
