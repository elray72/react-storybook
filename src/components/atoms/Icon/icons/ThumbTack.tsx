import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/thumb-tack.svg';

export const ThumbTack: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default ThumbTack;
