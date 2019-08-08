import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/circle.svg';
import svgO from '../svg/circle-o.svg';

export interface ICircle extends IIcon {
	variant?: undefined | 'o';
}

export const Circle: React.FC<ICircle> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Circle;
