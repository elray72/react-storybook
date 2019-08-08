import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/spotify.svg';

export const Spotify: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Spotify;
