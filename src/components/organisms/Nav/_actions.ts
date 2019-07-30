export const toggleNav = (expanded: boolean) => ({
	type: 'TOGGLE_NAV',
	expanded,
});

export const trackNavClick = (current: any = null) => ({
	type: 'TRACK_NAV_CLICK',
	current,
});
