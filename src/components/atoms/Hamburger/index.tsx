import * as React from 'react';
import classNames from 'classnames';
import './_hamburger.scss';

interface IProps {
	expanded?: boolean;
	type?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hamburger: React.FC<IProps> = (props) => {
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

	const expandType = props.type ? `hamburger--${props.type}` : 'hamburger--close';
	const componentClass = classNames('hamburger', expandType, {
		'hamburger--init': init, // init state has styles preventing the initial reverse animation
		'hamburger--expanded': expanded,
	});

	return (
		<button type="button" className={componentClass} onClick={handleOnClick}>
			<span className="hamburger__bar" />
			<span className="hamburger__bar" />
			<span className="hamburger__bar" />
		</button>
	);
};

export default Hamburger;
