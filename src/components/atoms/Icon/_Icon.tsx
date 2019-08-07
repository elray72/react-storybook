import * as React from 'react';
import Svg from 'react-inlinesvg';
import classNames from 'classnames';
import './_icon.scss';
import checkSvg from './svg/check.svg';

interface IProps {
	className?: string;
	color?: string;
	onClick?: Function;
	size?: string;
	src: any,
}

export const Component: React.FC<IProps> = (props) => {

	const componentClass = classNames(props.className, 'icon');

	return (
		<span className={componentClass}>
			<Svg className="icon__svg" src={checkSvg} />
		</span>
	);
};

export default Component;
