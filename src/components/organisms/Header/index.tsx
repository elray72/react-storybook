import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './_header.scss';

interface IProps {
	children?: React.ReactNode;
	className?: string;
	expanded?: boolean;

}

const Header: React.FC<IProps> = (props) => {
	const componentClass = classNames('header', props.className, {
		'header--expanded': props.expanded,
	});

	return (
		<div className={componentClass}>
			<div className="header__inner">{props.children}</div>
		</div>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { nav } = state;
	return {
		expanded: nav.expanded,
		...ownProps,
	};
};

export default connect(mapStateToProps)(Header);
