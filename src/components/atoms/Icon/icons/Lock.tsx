import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/lock.svg';

export const Lock: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Lock;
