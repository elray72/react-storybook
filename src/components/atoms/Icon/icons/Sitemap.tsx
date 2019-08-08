import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/sitemap.svg';

export const Sitemap: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Sitemap;
