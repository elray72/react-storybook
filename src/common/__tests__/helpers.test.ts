import { em } from '../helpers';

describe('Common: Helpers', () => {

	it('test em(16)', () => {
		expect(em(16)).toBe('1em');
	});

	it('test em(24)', () => {
		expect(em(24)).toBe('1.5em');
	});

	it('test em(24, 14)', () => {
		expect(em(24, 14)).toBe('1.714em');
	});

	it('test em(0)', () => {
		expect(em(0)).toBe(0);
	});

	it('test em(24, 0)', () => {
		expect(em(24, 0)).toBe('1.5em');
	});

	it('test em(0, 0)', () => {
		expect(em(0, 0)).toBe(0);
	});

});
