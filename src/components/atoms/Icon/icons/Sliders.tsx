import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/sliders.svg';

export const Sliders: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Sliders;
