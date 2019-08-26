import * as React from 'react';
import classNames from 'classnames';

interface IProps {
	count: number;
}

export const Panel: React.FC<IProps> = (props) => {

	return (
		<div>
			The number is {props.count}
		</div>
	);
};

export default Panel;
