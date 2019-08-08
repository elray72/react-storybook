import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/clock-o.svg';

export const Clock: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Clock;
