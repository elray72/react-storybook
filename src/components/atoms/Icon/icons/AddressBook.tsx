import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/address-book.svg';

export const AddressBook: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default AddressBook;
