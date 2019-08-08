import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/map.svg';

export const Map: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Map;
