import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/expand.svg';

export const Expand: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Expand;
