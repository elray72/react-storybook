import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/download.svg';

export const Download: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Download;
