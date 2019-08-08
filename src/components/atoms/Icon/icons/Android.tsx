import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/android.svg';

export const Android: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Android;
