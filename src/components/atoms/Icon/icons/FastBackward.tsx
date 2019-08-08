import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/fast-backward.svg';

export const FastBackward: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FastBackward;
