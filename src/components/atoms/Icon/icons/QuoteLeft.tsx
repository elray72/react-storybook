import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/quote-left.svg';

export const QuoteLeft: React.FC<IIcon> = (props) => {
	return (
		<Icon src={svg} {...props} />
	);
};

// noinspection JSUnusedGlobalSymbols
export default QuoteLeft;
