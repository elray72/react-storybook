import * as React from 'react';
import Svg from 'react-inlinesvg';
import classNames from 'classnames';
import './_checkbox.scss';
import checkSvg from '../../../../public/assets/icons/check.svg';

interface IProps {
	className?: string;
	color?: string;
	id?: string;
	onClick?: Function;
	size?: string;
	type?: string;
}


export const Component: React.FC<IProps> = (props) => {

	const handleClick = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	const type = props.type ? `-${props.type}` : '';
	const componentClass = classNames(
		props.className,
		'checkbox',
		props.color ? `checkbox--${props.color}${type}` : null,
		props.size ? `checkbox--${props.size}` : null,
	);
	return (
		<label className={componentClass} htmlFor={props.id} onClick={handleClick}>
			<input className="checkbox__input" id={props.id} type="checkbox" />
			<Svg className="checkbox__check" src={checkSvg} />
		</label>
	);
};

export default Component;
