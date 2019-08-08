import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/bookmark.svg';
import svgO from '../svg/bookmark-o.svg';

export const Bookmark: React.FC<IIcon> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Bookmark;
