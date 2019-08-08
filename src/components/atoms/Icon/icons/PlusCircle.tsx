import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/plus-circle.svg';

export const PlusCircle: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default PlusCircle;
