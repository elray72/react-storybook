import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file-word-o.svg';

export const FileWord: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FileWord;
