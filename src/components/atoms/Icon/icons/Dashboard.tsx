import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/dashboard.svg';

export const Dashboard: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Dashboard;
