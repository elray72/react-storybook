import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/exclamation.svg';

export const Exclamation: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Exclamation;
