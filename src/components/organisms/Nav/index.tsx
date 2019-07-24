import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './_nav.scss';

interface IProps {
	children: any;
	className?: string;
}

const Nav: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'nav');

	return <nav className={componentClass}>
		<ul className="nav__list">
			{(props.children || []).map((n: Link) => (
				<li className="nav__item" key={`nav_item_${n.props.to}`}>
					{n}
				</li>
			))}
		</ul>
	</nav>;
};

export default Nav;
