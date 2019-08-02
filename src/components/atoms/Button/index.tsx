import * as React from 'react';
import classNames from 'classnames';
import './_button.scss';

interface IProps {
	children?: React.ReactNode,
	className?: string;
	color?: string;
	onClick?: Function;
	size?: string;
	type?: string;
}

export const ButtonType = {
	Standard: null,
	Outline: 'outline',
	Text: 'text'
};

export const Component: React.FC<IProps> = (props) => {
	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const showRipple = (e: React.MouseEvent) => {
		const button = buttonRef.current;
		if (button) {
			const ripple = document.createElement('div');
			ripple.classList.add('button__ripple');
			ripple.style.top = `${e.clientY - button.offsetTop + window.pageYOffset}px`;
			ripple.style.left = `${e.clientX - button.offsetLeft + window.pageXOffset}px`;
			button.appendChild(ripple);

			console.log('mouse:', e.clientY, e.clientX);
			console.log('button:', button.offsetTop, button.offsetLeft);
			console.log('ripple:', e.clientY - button.offsetTop, e.clientX - button.offsetLeft);

			setTimeout(()=>{ripple.remove()},10000);
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		showRipple(e);
		if (props.onClick) {
			props.onClick();
		}
	};

	const type = props.type ? `-${props.type}` : '';
	const componentClass = classNames(
		props.className,
		'button',
		props.color ? `button--${props.color}${type}` : null,
		props.size ? `button--${props.size}` : null,
	);
	return (
		<button className={componentClass} ref={buttonRef} onClick={handleClick}>
			{props.children}
		</button>
	);
};

export default Component;
