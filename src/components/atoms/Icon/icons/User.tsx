import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/user.svg';

export const User: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default User;
