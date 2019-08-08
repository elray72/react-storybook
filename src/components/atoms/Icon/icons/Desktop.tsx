import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/desktop.svg';

export const Desktop: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Desktop;
