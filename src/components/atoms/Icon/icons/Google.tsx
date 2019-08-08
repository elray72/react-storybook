import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/google.svg';

export const Google: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Google;
