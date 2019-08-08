import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/volume-up.svg';

export const VolumeUp: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default VolumeUp;
