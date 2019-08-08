import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/tags.svg';

export const Tags: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Tags;
