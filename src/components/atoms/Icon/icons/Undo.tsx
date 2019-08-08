import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/undo.svg';

export const Undo: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default Undo;
