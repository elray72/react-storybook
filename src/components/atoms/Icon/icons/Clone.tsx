import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/clone.svg';

export const Clone: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Clone;
