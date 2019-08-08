import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/file-video-o.svg';

export const FileVideo: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FileVideo;
