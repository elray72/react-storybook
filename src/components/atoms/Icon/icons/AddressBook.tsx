import * as React from 'react';
import Icon from '../Icon';
import svg from '../svg/address-book.svg';

export interface IProps {
	className?: string;
	color?: string;
	onClick?: Function;
	size?: string;
}

export const AddressBook: React.FC<IProps> = (props) => {
	return (
		<Icon {...props} src={svg} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default AddressBook;
