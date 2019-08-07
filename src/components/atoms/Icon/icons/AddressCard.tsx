import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/address-card.svg';

export const AddressCard: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default AddressCard;
