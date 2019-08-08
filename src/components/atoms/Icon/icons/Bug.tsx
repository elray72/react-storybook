import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/bug.svg';

export const Adjust: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Adjust;
