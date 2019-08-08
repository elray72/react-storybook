import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/youtube-play.svg';

export const YouTube: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default YouTube;
