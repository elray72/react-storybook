import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/minus-circle.svg';

export const MinusCircle: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default MinusCircle;
