import * as React from 'react';
import classNames from 'classnames';
import './_badge.scss';
import { Color } from '../../../common/types';

interface IProps {
	children: React.ReactNode;
	className?: string;
	color?: Color;
	max?: number;
	value?: string | number;
}

/* todo: button, icon, wrap an item */

const BadgeContainer: React.FC<IProps> = (props) => {
	const componentColor = props.color ? `badge--${props.color}` : null;
	const componentClass = classNames(props.className, 'badge', componentColor, {
		'badge--text': typeof props.value === 'string',
	});

	let { value, max } = props;
	if (typeof value === 'number' && typeof max !== 'undefined') {
		value = value <= max ? value : `${max}+`;
	}

	return (
		<span className="badge-container">
			{props.children}
			<span className={componentClass}>{value}</span>
		</span>
	);
};

export default BadgeContainer;
