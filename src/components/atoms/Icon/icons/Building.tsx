import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/building.svg';

export const Building: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Building;
