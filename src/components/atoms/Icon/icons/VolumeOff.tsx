import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/volume-off.svg';

export const VolumeOff: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default VolumeOff;
