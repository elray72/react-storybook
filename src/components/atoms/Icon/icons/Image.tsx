import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/image.svg';

export const Image: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Image;
