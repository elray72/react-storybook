import * as React from 'react';
import Svg from 'react-inlinesvg';
import classNames from 'classnames';
import './_icon.scss';
import checkSvg from './svg/check.svg';

interface IProps {
	className?: string;
	color?: string;
	size?: string;
	src: any,
}

// used by children to hide the 'src' prop
export interface IIcon {
	className?: string;
	color?: string;
	size?: string;
}

export const Icon: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'icon');
	return (
		<span className={componentClass}>
			<Svg className="icon__svg" src={checkSvg} />
		</span>
	);
};

export default Icon;
