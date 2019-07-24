
const wizard = (state: any[] = [], action: any) => {
	switch (action.type) {
		case 'LOG_TEST':
			console.log(state, action);
			return [
				...state,
				{
					text: action.text,
				},
			];
		case 'TOGGLE_TODO':
			return state.map((todo: any) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
		default:
			return state;
	}
};

export default wizard;
