import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import './_nav-button.scss';

interface IProps {
	className?: string,
	expanded?: boolean;
	type?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const NavButtonType = {
	Default: 'close',
	ArrowUp: 'arrow-up',
	ArrowDown: 'arrow-down',
	ArrowLeft: 'arrow-left',
	ArrowRight: 'arrow-right',
};

const NavButton: React.FC<IProps> = (props) => {
	const [init, setInit] = React.useState(true);
	const [expanded, setExpanded] = React.useState(props.expanded);

	React.useLayoutEffect(() => {
		setExpanded(props.expanded);
	}, [props.expanded]);

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setInit(false); // on first click, enable animations
		if (props.onClick) props.onClick(e);
		else setExpanded((expanded) => !expanded);
	};

	const componentType = props.type ? `nav-button--${props.type}` : 'nav-button--close';
	const componentClass = classNames(props.className, 'nav-button', componentType, {
		'nav-button--init': init, // init state has styles preventing the initial reverse animation
		'nav-button--expanded': expanded,
	});

	return (
		<button type="button" className={componentClass} onClick={handleOnClick}>
			<span className="nav-button__bar" />
			<span className="nav-button__bar" />
			<span className="nav-button__bar" />
		</button>
	);
};


export default NavButton;
