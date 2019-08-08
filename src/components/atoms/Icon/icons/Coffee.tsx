import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/coffee.svg';

export const Coffee: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Coffee;
