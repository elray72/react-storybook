import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/volume-down.svg';

export const VolumeDown: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default VolumeDown;
