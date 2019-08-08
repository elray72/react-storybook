import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/lightbulb.svg';

export const LightBulb: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default LightBulb;
