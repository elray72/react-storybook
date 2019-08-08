import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/question-circle.svg';
import svgO from '../svg/question-circle-o.svg';

export interface IQuestionCircle extends IIcon {
	variant?: undefined | 'o';
}

export const Bell: React.FC<IQuestionCircle> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Bell;
