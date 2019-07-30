import * as React from 'react';
import Svg from 'react-inlinesvg';
import classNames from 'classnames';
import './_logo.scss';

interface IProps {
	className?: string;
	src: string;
	href?: string;
	target?: string;
	title: string;
}

export const componentName = 'Base';

export const Logo: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'logo');
	let linkProps = [];
	if (props.href) linkProps.push({ href: props.href });
	if (props.target) linkProps.push({ target: props.target });

	return (
		<div className={componentClass}>
			<a {...linkProps}>
				<Svg src={props.src} title={props.title} />
			</a>
		</div>
	);
};

export default Logo;
