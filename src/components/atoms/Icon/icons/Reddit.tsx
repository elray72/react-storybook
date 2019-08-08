import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/reddit.svg';

export const Reddit: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Reddit;
