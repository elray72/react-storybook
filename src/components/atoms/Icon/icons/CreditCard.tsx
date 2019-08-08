import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/credit-card.svg';

export const CreditCard: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default CreditCard;
