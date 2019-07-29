export const toggleNav = (expanded: boolean) => ({
	type: 'TOGGLE_NAV',
	expanded,
});

export const trackNavClick = (current: string = 'Home') => ({
	type: 'TRACK_NAV_CLICK',
	current,
});
