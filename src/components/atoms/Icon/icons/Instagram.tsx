import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/instagram.svg';

export const Instagram: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Instagram;
