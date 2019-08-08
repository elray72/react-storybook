import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/sort.svg';
import svgAsc from '../svg/sort-amount-asc.svg';
import svgDesc from '../svg/sort-amount-desc.svg';
import svgAmountAsc from '../svg/sort-asc.svg';
import svgAmountDesc from '../svg/sort-desc.svg';

export interface IStar extends IIcon {
	variant?: undefined | 'asc' | 'desc' | 'amount-asc' | 'amount-desc';
}

export const Star: React.FC<IStar> = (props) => {
	let _svg = svg;
	switch (props.variant) {
		case 'asc':
			_svg = svgAsc;
			break;

		case 'desc':
			_svg = svgDesc;
			break;

		case 'amount-asc':
			_svg = svgAmountAsc;
			break;

		case 'amount-desc':
			_svg = svgAmountDesc;
			break;
	}

	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Star;
