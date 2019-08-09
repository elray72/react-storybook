import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/stop-circle.svg';
import svgO from '../svg/stop-circle-o.svg';

interface IStopCircle extends IIcon {
	variant?: undefined | 'o';
}

export const StopCircle: React.FC<IStopCircle> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default StopCircle;
