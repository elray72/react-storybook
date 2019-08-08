import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/shopping-cart.svg';

export const ShoppingCart: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default ShoppingCart;
