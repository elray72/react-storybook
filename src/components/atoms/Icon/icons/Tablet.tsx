import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/tablet.svg';

export const Tablet: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Tablet;
