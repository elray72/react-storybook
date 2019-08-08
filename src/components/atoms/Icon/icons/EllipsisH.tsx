import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/ellipsis-h.svg';

export const EllipsisH: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default EllipsisH;
