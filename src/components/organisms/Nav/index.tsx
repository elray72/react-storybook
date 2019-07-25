import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './_nav.scss';

interface IProps {
	children?: Link[] | any;
	className?: string;
}

const Nav: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'nav');
	const navItems = props.children.length ? props.children : [props.children];

	return <nav className={componentClass}>
		<ul className="nav__list">
			{(navItems || []).map((n: Link | any, i: number) => {
				return (
					<li className="nav__item" key={`nav_item_${i}`}>
						{n}
					</li>
				)
			})}
		</ul>
	</nav>;
};

export default Nav;
