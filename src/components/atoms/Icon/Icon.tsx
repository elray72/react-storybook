import * as React from 'react';
import Svg from 'react-inlinesvg';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import { rem } from '../../../common/css-helpers';
import './_icon.scss';

interface IProps {
	className?: string;
	color?: string;
	size?: number;
	src: any,
}

// used by children to hide the 'src' prop
export interface IIcon {
	className?: string;
	color?: string;
	size?: number;
}

const Span = styled.span<IProps>`
	${p => p.size && css`
		font-size: ${rem(p.size)};
	`}
`;

export const Icon: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'icon');
	return (
		<Span className={componentClass} {...props}>
			<Svg className="icon__svg" src={props.src} />
		</Span>
	);
};

export default Icon;
