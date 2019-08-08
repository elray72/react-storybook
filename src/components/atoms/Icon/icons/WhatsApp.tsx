import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/whatsapp.svg';

export const WhatsApp: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default WhatsApp;
