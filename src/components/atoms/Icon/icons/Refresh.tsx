import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/refresh.svg';

export const Refresh: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Refresh;
