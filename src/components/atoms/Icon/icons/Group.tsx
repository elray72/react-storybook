import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/group.svg';

export const Group: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Group;
