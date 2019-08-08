import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/envelope.svg';
import svgO from '../svg/envelope-o.svg';

export interface IEnvelope extends IIcon {
	variant?: undefined | 'o';
}

export const Envelope: React.FC<IEnvelope> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Envelope;
