import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/fort-awesome.svg';

export const FortAwesome: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FortAwesome;
