import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/cog.svg';

export const Cog: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Cog;
