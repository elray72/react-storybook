import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/cc.svg';

export const CC: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default CC;
