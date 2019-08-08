import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/phone.svg';

export const Phone: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Phone;
