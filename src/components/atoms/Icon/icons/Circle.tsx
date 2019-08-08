import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/circle.svg';
import svgO from '../svg/circle-o.svg';

export const Circle: React.FC<IIcon> = (props) => {
	const _svg = props.variant === 'O' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Circle;
