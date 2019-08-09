import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/paste.svg';

export const Paste: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Paste;
