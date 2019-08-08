import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/cut.svg';

export const Cut: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Cut;
