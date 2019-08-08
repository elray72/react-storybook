import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file-pdf-o.svg';

export const FilePdf: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FilePdf;
