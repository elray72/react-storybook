import * as React from 'react';
import Svg from 'react-inlinesvg';
import classNames from 'classnames';
import './_icon.scss';
import checkSvg from '../../../../public/assets/icons/check.svg';

interface IProps {
	className?: string;
	color?: string;
	id?: string;
	label?: string;
	labelPosition?: string;
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

	const label = props.label ? <span className="checkbox__label">{props.label}</span> : null;
	const labelPosition = label ? `checkbox--label-${props.labelPosition}` : null;

	const type = props.type ? `-${props.type}` : '';
	const componentClass = classNames(
		props.className,
		'checkbox',
		props.color ? `checkbox--${props.color}${type}` : null,
		props.size ? `checkbox--${props.size}` : null,
		labelPosition
	);
	return (
		<label className={componentClass} htmlFor={props.id} onClick={handleClick}>
			<input className="checkbox__input" id={props.id} type="checkbox" />
			<span className="checkbox__box">
				<Svg className="checkbox__check" src={checkSvg} />
			</span>
			{label}
		</label>
	);
};

export default Component;
