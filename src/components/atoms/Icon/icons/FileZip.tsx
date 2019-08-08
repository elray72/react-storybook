import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file-zip-o.svg';

export const FileZip: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FileZip;
