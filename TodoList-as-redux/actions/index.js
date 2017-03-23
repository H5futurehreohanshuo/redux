let nextTodoId = 0;

// 添加待办项的action
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId,
		text
	}
}

// 筛选查看的是所有的、正在进行的还是已经完成的action
export const setVisibility = (filter) => {
	return {
		type: 'SET_VISIBILITY',
		filter
	}
}

// 点击某一个任务项变成代办或者已完成的action
export const toggleTodo = (id) => {
	return {
		type: "TOGGLE_TODO",
		id
	}
}