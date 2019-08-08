import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/info.svg';

export const Info: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Info;
