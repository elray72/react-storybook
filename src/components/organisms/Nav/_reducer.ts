const initialState = {
	expanded: false,
	current: 'Home',
};

const nav = (state = initialState, action: any) => {
	switch (action.type) {
		case 'TOGGLE_NAV':
			// return {
			// 	expanded: action.expanded,
			// };
			return Object.assign({}, state, {
				expanded: action.expanded
			});
		case 'TRACK_NAV_CLICK':
			return Object.assign({}, state, {
				current: action.current
			});
		default:
			return state;
	}
};

export default nav;
