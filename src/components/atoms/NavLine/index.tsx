import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './_nav-line.scss';

interface IProps {
	className?: string;
}

const NavLine: React.FC<IProps> = (props: any) => {
	const componentClass = classNames(	props.className, 'nav__line');
	return (
		<span className={componentClass} />
	);
};

export default connect()(NavLine);