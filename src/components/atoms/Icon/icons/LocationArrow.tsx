import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/location-arrow.svg';

export const LocationArrow: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default LocationArrow;
