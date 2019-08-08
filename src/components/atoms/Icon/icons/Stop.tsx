import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/stop.svg';

export const Stop: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Stop;
