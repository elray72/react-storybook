import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/bug.svg';

export const Bug: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Bug;
