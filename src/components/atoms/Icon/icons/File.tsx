import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file.svg';

export const File: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default File;
