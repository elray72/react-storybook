import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/bell.svg';
import svgO from '../svg/bell-o.svg';

export interface IBell extends IIcon {
	variant?: undefined | 'o';
}

export const Bell: React.FC<IBell> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Bell;
