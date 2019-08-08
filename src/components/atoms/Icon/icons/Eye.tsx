import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/eye.svg';

export const Eye: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Eye;
