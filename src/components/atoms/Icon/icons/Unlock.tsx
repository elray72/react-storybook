import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/unlock.svg';

export const Unlock: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Unlock;
