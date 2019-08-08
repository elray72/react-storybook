import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/area-chart.svg';

export const AreaChart: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default AreaChart;
