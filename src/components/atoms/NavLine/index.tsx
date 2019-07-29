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


const mapStateToProps = (state: any, ownProps: any) => {
	const { nav } = state;
	console.log(state);
	return {
		current: nav.current,
		...ownProps,
	};
};

export default connect(mapStateToProps)(NavLine);