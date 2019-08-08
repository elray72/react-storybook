import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/times.svg';

export const Times: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Times;
