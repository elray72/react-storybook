import * as React from 'react';
import classNames from 'classnames';
import './_header.scss';

import Hamburger from '../../atoms/Hamburger';
import Nav from '../../organisms/Nav';

interface IProps {
	children: React.ReactElement<typeof Nav>;
}

const Header: React.FC<IProps> = (props) => {
	const [expanded, setExpanded] = React.useState(false);

	const toggleExpandedState = () => setExpanded((expanded) => !expanded);
	const handleHamburgerClick = () => toggleExpandedState();
	const handleOverlayClick = () => {
		// if wrapper prevents further click of overlay while transitioning out
		if (expanded) {
			toggleExpandedState()
		}
	};

	const headerClass = classNames({
		'header': true,
		'header--sticky': true,
		'header--expanded': expanded,
	});

	const menuClass = classNames({
		'header__menu': true,
		'header__menu--expanded': expanded,
	});

	return (
		<React.Fragment>
			<header className={headerClass}>
				<div className="header__inner">
					<div className="header__logo" />
					<div className={menuClass}>{props.children}</div>
				</div>
				<div className="header__overlay" onClick={handleOverlayClick} />
			</header>
			<Hamburger expanded={expanded} onClick={handleHamburgerClick} />
		</React.Fragment>
	);
};

export default Header;
