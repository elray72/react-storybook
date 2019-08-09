import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/github-alt.svg';

export const GitHub: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default GitHub;
