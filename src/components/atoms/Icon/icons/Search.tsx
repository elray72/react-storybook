import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/search.svg';

export const Search: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Search;
