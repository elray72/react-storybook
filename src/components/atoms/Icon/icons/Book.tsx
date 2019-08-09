import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/book.svg';

export const Book: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Book;
