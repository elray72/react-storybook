import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/users.svg';

export const Users: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Users;
