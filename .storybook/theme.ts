import { create } from '@storybook/theming';

const theme = create({
	base: 'light',

	//colorPrimary: 'hotpink',
	//colorSecondary: '#ff7979',
	// #68ebca ff7979
	// // UI
	// appBg: 'white',
	//appContentBg: '#fff',
	// appBorderColor: 'grey',
	//appBorderRadius: 4,
	//
	// // Typography
	// fontBase: '"Open Sans", sans-serif',
	// fontCode: 'monospace',
	//
	// // Text colors
	// textColor: 'black',
	// textInverseColor: 'rgba(255,255,255,0.9)',
	//
	// // Toolbar default and active colors
	//barTextColor: 'silver',
	//barSelectedColor: 'black',
	//barBg: 'hotpink',
	//
	// // Form colors
	// inputBg: 'white',
	// inputBorder: 'silver',
	// inputTextColor: 'black',
	// inputBorderRadius: 4,

	brandTitle: 'React Storybook',
	brandUrl: 'https://elray72.github.io/react-storybook/',
	brandImage: 'https://elray72.github.io/react-storybook/assets/img/r-logo-storybook.svg',
});

export default theme;
