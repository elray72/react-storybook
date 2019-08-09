import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/thumbs-up.svg';
import svgO from '../svg/thumbs-o-up.svg';

interface IThumbsUp extends IIcon {
	variant?: undefined | 'o';
}

export const ThumbsUp: React.FC<IThumbsUp> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default ThumbsUp;
