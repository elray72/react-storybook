import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/minus.svg';

export const Minus: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Minus;
