import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/repeat.svg';

export const Repeat: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Repeat;
