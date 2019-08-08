import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/bell.svg';
import svgO from '../svg/bell-o.svg';

export const Bell: React.FC<IIcon> = (props) => {
	const _svg = props.variant === 'O' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Bell;
