import * as React from 'react';
import Icon, { IIcon } from '../Icon';
import svg from '../svg/camera.svg';

export const Calendar: React.FC<IIcon> = (props) => {
	return <Icon src={svg} {...props} />;
};

// noinspection JSUnusedGlobalSymbols
export default Calendar;
