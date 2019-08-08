import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/envelope.svg';
import svgO from '../svg/envelope-o.svg';

export const Envelope: React.FC<IIcon> = (props) => {
	const _svg = props.variant === 'o' ? svgO : svg;
	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Envelope;
