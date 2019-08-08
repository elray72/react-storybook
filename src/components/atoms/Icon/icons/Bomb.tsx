import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/bomb.svg';

export const Bomb: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Bomb;
