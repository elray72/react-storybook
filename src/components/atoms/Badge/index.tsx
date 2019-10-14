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
const BadgeContainer: React.FC<IProps> = ({
	children,
	className,
	color,
	max,
	value,
}) => {
	if (typeof value === 'number' && typeof max !== 'undefined') {
		value = value <= max ? value : `${max}+`;
	}

	const componentColor = color ? `badge--${color}` : null;
	const componentClass = classNames(className, 'badge', componentColor, {
		'badge--text': typeof value === 'string',
	});

	return (
		<span className="badge-container">
			{children}
			<span className={componentClass}>{value}</span>
		</span>
	);
};

export default BadgeContainer;
