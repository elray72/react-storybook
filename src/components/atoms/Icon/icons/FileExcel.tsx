import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file-excel-o.svg';

export const FileExcel: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FileExcel;
