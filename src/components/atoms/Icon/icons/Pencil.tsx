import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/pencil.svg';

export const Pencil: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Pencil;
