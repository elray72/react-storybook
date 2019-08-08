import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/at.svg';

export const At: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default At;
