import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/pause.svg';

export const Pause: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Pause;
