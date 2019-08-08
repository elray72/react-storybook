import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/fire.svg';

export const Fire: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Fire;
