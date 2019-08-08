import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/list-ul.svg';

export const ListUL: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default ListUL;
