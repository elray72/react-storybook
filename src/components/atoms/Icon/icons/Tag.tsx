import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/tag.svg';

export const Tag: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Tag;
