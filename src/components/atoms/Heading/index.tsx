import * as React from 'react';
import styled from 'styled-components';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IProps {
	type: HeadingTypes,
	className?: string,
	children?: React.ReactNode,
}

export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;

export const Heading: React.FC<IProps> = (props) => {

	switch (props.type) {
		case 'h1': {
			return <H1 className={props.className}>{props.children}</H1>;
		}
		case 'h2': {
			return <H2 className={props.className}>{props.children}</H2>;
		}
		case 'h3': {
			return <H3 className={props.className}>{props.children}</H3>;
		}
		case 'h4': {
			return <H4 className={props.className}>{props.children}</H4>;
		}
		case 'h5': {
			return <H5 className={props.className}>{props.children}</H5>;
		}
		case 'h6': {
			return <H6 className={props.className}>{props.children}</H6>;
		}
	}
};

export default Heading;
