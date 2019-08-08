import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/laptop.svg';

export const Laptop: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Laptop;
