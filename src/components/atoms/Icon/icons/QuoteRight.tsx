import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/quote-right.svg';

export const QuoteRight: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default QuoteRight;
