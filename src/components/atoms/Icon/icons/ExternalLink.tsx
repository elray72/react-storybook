import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/external-link.svg';

export const ExternalLink: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default ExternalLink;
