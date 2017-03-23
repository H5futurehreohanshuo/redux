// 对待办项的响应
const todo = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case "TOGGLE_TODO":
			if (state.id !== action.id) {
				return state;
			}
			return Object.assgin({}, state, {
				completed: !state.completed
			});
		default:
			return state;
	}
}

// 待办项列表的响应
const todos = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				todo(undefined, action)
			]
		case "TOGGLE_TODO":
			return state.map(t => todo(t, action));
		default:
			return state;
	}
}

export default todos;




















