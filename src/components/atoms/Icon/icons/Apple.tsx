import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/apple.svg';

export const Apple: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Apple;
