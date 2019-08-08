import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/linkedin.svg';

export const LinkedIn: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default LinkedIn;
