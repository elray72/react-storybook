import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/play-circle.svg';

export const PlayCircle: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default PlayCircle;
