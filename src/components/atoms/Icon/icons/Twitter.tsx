import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/twitter.svg';

export const Twitter: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Twitter;
