import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/recycle.svg';

export const Recycle: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Recycle;
