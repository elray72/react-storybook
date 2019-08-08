import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/ellipsis-v.svg';

export const EllipsisV: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default EllipsisV;
