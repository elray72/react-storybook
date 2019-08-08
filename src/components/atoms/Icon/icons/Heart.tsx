import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/heart.svg';
import svgO from '../svg/heart-o.svg';

export const Heart: React.FC<IIcon> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Heart;
