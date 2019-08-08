import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file-picture-o.svg';

export const FilePicture: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FilePicture;
