import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/codepen.svg';

export const CodePen: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default CodePen;
