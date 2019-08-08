import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/dropbox.svg';

export const Dropbox: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Dropbox;
