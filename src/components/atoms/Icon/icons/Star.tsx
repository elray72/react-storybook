import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/star.svg';
import svgO from '../svg/star-o.svg';
import svgHalfO from '../svg/star-half-o.svg';

export interface IStar extends IIcon {
	variant?: undefined | 'o' | 'half-o';
}

export const Star: React.FC<IStar> = (props) => {
	let _svg = svg;
	switch (props.variant) {
		case 'o':
			_svg = svgO;
			break;

		case 'half-o':
			_svg = svgHalfO;
			break;
	}

	return <Icon src={_svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Star;
