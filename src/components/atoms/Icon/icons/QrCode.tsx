import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/qrcode.svg';

export const QrCode: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default QrCode;
