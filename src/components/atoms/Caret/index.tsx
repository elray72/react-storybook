import * as React from 'react';
import classNames from 'classnames';
import './_caret.scss';

interface IProps {
	expanded?: boolean;
	type: string;
	onClick?: (event: any) => void;
}

export const CaretType = {
	Up: 'up',
	Down: 'down',
	Left: 'left',
	Right: 'right',
	UpDown: 'up-down',
	LeftRight: 'left-right',
};

const Caret: React.FC<IProps> = (props) => {
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


	const comonentType = props.type ? `caret--${props.type}` : 'nav-button--close';
	const componentClass = classNames('nav-button', comonentType, {
		'nav-button--init': init, // init state has styles preventing the initial reverse animation
		'nav-button--expanded': expanded,
	});

	return (
		<span className={componentClass} onClick={handleOnClick}>
			<span className="nav-button__bar" />
			<span className="nav-button__bar" />
			<span className="nav-button__bar" />
		</span>
	);
};

export default Caret;
