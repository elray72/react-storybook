import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/font-awesome.svg';

export const FontAwesome: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default FontAwesome;
