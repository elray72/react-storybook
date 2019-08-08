import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/paperclip.svg';

export const Paperclip: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Paperclip;
