import * as React from 'react';
import classNames from 'classnames';
import './_chevron.scss';

interface IProps {
	animate?: boolean,
	className?: string;
	size?: string;
	type?: string;
}

export const ChevronSize = {
	Inline: 'inline',
	Small: 'sm',
	Medium: 'md',
	Large: 'lg',
	XLarge: 'xl',
};

export const ChevronType = {
	Up: 'up',
	Down: 'down',
	Left: 'left',
	Right: 'right',
};

export const Chevron: React.FC<IProps> = (props) => {
	const [orientation, setOrientation] = React.useState(props.type);

	const handleClick = () => {
		if (!props.animate) return;

		console.log('handle click', props.animate, orientation);
		toggleOrientation(orientation);
	};

	const toggleOrientation = (orientation: string | undefined) => {
		switch (orientation) {

			case ChevronType.Up:
				console.log(orientation, 'up');
				setOrientation(ChevronType.Down);
				break;

			case ChevronType.Down:
				setOrientation(ChevronType.Up);
				break;

			case ChevronType.Left:
				setOrientation(ChevronType.Right);
				break;

			case ChevronType.Right:
				setOrientation(ChevronType.Left);
				break;
		}
	};

	const chevronSize = props.size ? `chevron--${props.size}` : '';
	const chevronOrientation = props.size ? `chevron--${orientation}` : '';
	const componentClass = classNames(props.className, 'chevron', chevronOrientation, chevronSize);

	return (
		<span className={componentClass} onClick={handleClick}>
			<svg
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid"
			>
				<g className="chevron__container">
					<line className="chevron__line1" x1="10" y1="50" x2="50" y2="50" />
					<line className="chevron__line2" x1="90" y1="50" x2="50" y2="50" />
				</g>
			</svg>
		</span>
	);
};

export default Chevron;
