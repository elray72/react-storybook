import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/github.svg';

export const Github: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Github;
