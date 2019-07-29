import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { trackNavClick } from './_actions';
import './_nav.scss';

import NavLine from '../../atoms/NavLine';

interface IProps {
	children?: Link[] | any;
	className?: string;
	dispatch?: Function;
	expanded?: boolean;
}

const NavItem = (item: any, dispatch: Function | undefined) => {
	const handleClick = () => {
		console.log(item);
		if (dispatch) {
			dispatch(trackNavClick('ss'));
		}
	};

	return React.cloneElement(item, {
		onClick: handleClick,
	});
};

const Nav: React.FC<IProps> = (props) => {
	const navItems = props.children.length ? props.children : [props.children];
	const componentClass = classNames(props.className, 'nav', {
		'nav--expanded': props.expanded,
	});
	console.log(props);

	return (
		<nav className={componentClass}>
			<ul className="nav__list">
				{(navItems || []).map((n: Link | any, i: number) => {
					//n.onClick
					return (
						<li className="nav__item" key={`nav_item_${i}`}>
							{NavItem(n, props.dispatch)}
						</li>
					);
				})}
			</ul>
			<NavLine />
		</nav>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { nav } = state;
	return {
		expanded: nav.expanded,
		...ownProps,
	};
};

export default connect(mapStateToProps)(Nav);
