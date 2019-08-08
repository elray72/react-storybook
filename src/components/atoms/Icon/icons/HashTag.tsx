import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/hashtag.svg';

export const HashTag: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default HashTag;
