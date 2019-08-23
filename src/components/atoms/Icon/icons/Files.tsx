import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/files-o.svg';

export const Files: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Files;
