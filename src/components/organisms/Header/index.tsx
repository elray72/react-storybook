import * as React from 'react';
import classNames from 'classnames';
import './_header.scss';

interface IProps {
	children?: React.ReactNode,
	className?: string,
}

const Header: React.FC<IProps> = (props) => {
	const componentClass = classNames('header', props.className);

	return (
		<div className={componentClass}>
			<div className="header__inner">
				{props.children}
			</div>
		</div>
	);
};

export default Header;
