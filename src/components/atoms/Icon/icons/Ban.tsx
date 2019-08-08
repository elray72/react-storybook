import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/ban.svg';

export const Ban: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Ban;
