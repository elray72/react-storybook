import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/rotate-left.svg';

export const RotateLeft: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default RotateLeft;
