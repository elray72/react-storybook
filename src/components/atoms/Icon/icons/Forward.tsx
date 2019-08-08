import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/forward.svg';

export const Forward: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Forward;
