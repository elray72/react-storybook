import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/paper-plane.svg';
import svgO from '../svg/paper-plane-o.svg';

export interface IPaperPlane extends IIcon {
	variant?: undefined | 'o';
}

export const PaperPlane: React.FC<IPaperPlane> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default PaperPlane;
