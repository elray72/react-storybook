import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Heading, { H1, H2, H3, H4, H5, H6 } from './index';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Atoms: Heading', () => {

	describe('Renders correct types', () => {

		let props = {
			type: "h1",
			className: "heading",
			colour: undefined,
			children: 'Heading text'
		};

		const h1 = shallow(<Heading type="h1">{props.children}</Heading>);
		it('Renders', () => {
			expect(h1.exists()).toBe(true);
			expect(h1.text()).toBe(props.children);
		});

		it('H1 renders correctly', () => {
			expect(h1.name()).toContain('styled.h1');
		});

		const h2 = shallow(<Heading type="h2">{props.children}</Heading>);
		it('H2 renders correctly', () => {
			expect(h2.name()).toContain('styled.h2');
		});

		const h3 = shallow(<Heading type="h3">{props.children}</Heading>);
		it('H3 renders correctly', () => {
			expect(h3.name()).toContain('styled.h3');
		});

		const h4 = shallow(<Heading type="h4">{props.children}</Heading>);
		it('H4 renders correctly', () => {
			expect(h4.name()).toContain('styled.h4');
		});

		const h5 = shallow(<Heading type="h5">{props.children}</Heading>);
		it('H5 renders correctly', () => {
			expect(h5.name()).toContain('styled.h5');
		});

		const h6 = shallow(<Heading type="h6">{props.children}</Heading>);
		it('H6 renders correctly', () => {
			expect(h6.name()).toContain('styled.h6');
		});

	});

});
