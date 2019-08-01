import * as React from 'react';
import classNames from 'classnames';
import './_icon.scss';

interface IProps {
	children?: React.ReactNode,
	className?: string;
	onClick?: Function;
	size?: string;
	theme?: string;
}

export const Component: React.FC<IProps> = (props) => {
	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const showRipple = (e: React.MouseEvent) => {
		const button = buttonRef.current;

		if (button) {
			const ripple = document.createElement('div');
			ripple.classList.add('button__ripple');
			ripple.style.top = `${e.clientY - button.offsetTop}px`;
			ripple.style.left = `${e.clientX - button.offsetLeft}px`;
			button.appendChild(ripple);

			setTimeout(()=>{ripple.remove()},1000);
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		showRipple(e);
		if (props.onClick) {
			props.onClick();
		}
	};

	const componentClass = classNames(
		props.className,
		'button',
		props.theme ? `button--${props.theme}` : null,
	);
	return (
		<button className={componentClass} ref={buttonRef} onClick={handleClick}>
			{props.children}
		</button>
	);
};

export default Component;
