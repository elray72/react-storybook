import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/snapchat.svg';

export const Snapchat: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Snapchat;
