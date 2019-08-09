import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/thumbs-down.svg';
import svgO from '../svg/thumbs-o-down.svg';

interface IThumbsDown extends IIcon {
	variant?: undefined | 'o';
}

export const ThumbsDown: React.FC<IThumbsDown> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default ThumbsDown;
