import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/info-circle.svg';

export const InfoCircle: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default InfoCircle;
