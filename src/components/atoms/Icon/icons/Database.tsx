import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/database.svg';

export const Database: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Database;
