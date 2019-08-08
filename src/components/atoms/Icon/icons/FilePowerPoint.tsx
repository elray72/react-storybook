import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file-powerpoint-o.svg';

export const FilePowerPoint: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FilePowerPoint;
