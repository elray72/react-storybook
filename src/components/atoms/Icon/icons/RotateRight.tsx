import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/rotate-right.svg';

export const RotateRight: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default RotateRight;
