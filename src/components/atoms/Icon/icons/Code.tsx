import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/code.svg';

export const Code: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Code;
