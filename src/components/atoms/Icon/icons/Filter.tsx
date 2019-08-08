import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/filter.svg';

export const Filter: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Filter;
