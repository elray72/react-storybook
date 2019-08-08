import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/user-plus.svg';

export const UserPlus: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default UserPlus;
