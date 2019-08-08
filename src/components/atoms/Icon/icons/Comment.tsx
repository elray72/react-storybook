import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/comment-o.svg';

export const Comment: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Comment;
