import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleNav } from '../../organisms/Nav/_actions';
import './_nav-button.scss';

interface IProps {
	className?: string;
	dispatch: Function;
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

const NavButton: React.FC<IProps> = (props: any) => {
	const [init, setInit] = React.useState(true);
	const [expanded, setExpanded] = React.useState(props.expanded ? props.expanded : false);

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		// on first click, enable animations
		setInit(false);

		// toggle expanded state and dispatch redux action
		setExpanded((expanded: boolean) => !expanded);
		props.dispatch(toggleNav(!expanded));

		// run any passed onClick events if exists
		if (props.onClick) props.onClick(e);
	};

	const componentType = props.type
		? `nav-button--${props.type}`
		: 'nav-button--close';
	const componentClass = classNames(
		props.className,
		'nav-button',
		componentType,
		{
			'nav-button--init': init, // init state has styles preventing the initial reverse animation
			'nav-button--expanded': expanded, // expanded useState
		},
	);

	return (
		<button type="button" className={componentClass} onClick={handleOnClick}>
			<span className="nav-button__bar" />
			<span className="nav-button__bar" />
			<span className="nav-button__bar" />
		</button>
	);
};

export default connect()(NavButton);
