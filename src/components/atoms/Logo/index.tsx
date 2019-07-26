import * as React from 'react';
import classNames from 'classnames';
import './_image.scss';


interface IProps {
	auto?: string;
	children?: React.ReactNode;
	className?: string;
	padding?: number;
	src: string;
	title: string;
}

export const Logo: React.FC<IProps> = (props) => {
	const componentClass = classNames('logo');

	return (
		<div className={componentClass}>
			<img src={props.src} alt={props.title} />
		</div>
	);
};

export default Logo;
