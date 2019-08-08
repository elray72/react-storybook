import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/exclamation-triangle.svg';

export const ExclamationTriangle: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default ExclamationTriangle;
