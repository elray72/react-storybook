import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/copyright.svg';

export const Copyright: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Copyright;
