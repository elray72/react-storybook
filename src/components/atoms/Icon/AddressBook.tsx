import * as React from 'react';
import Icon from './_Icon';
import svg from './svg/check.svg';

interface IProps {
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

export default AddressBook;
