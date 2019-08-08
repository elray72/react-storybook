import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file-photo-o.svg';

export const FilePhoto: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FilePhoto;
