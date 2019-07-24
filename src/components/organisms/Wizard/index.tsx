import * as React from 'react';
import classNames from 'classnames';
import './_wizard.scss';

import Step from './Step';

interface IProps {
	children?: React.ReactNode;
	className?: string;
}

const Wizard: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'wizard');

	return (
		<div className={componentClass}>
			{props.children}
		</div>
	);
};

export default Wizard;
