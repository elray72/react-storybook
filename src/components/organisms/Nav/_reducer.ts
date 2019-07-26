const initialState = {
	expanded: false,
};

const nav = (state = initialState, action: any) => {
	switch (action.type) {
		case 'TOGGLE_NAV':
			return {
					expanded: action.expanded,
			};
		default:
			return state;
	}
};

export default nav;
