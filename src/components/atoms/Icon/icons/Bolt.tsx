import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/bolt.svg';

export const Bolt: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Bolt;
