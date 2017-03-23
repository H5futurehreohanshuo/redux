
// 筛选查看的是所有的、正在进行的还是已经完成的响应
const visibilityFilter = (state="SHOW_ALL", action) => {
	switch (action.type) {
		case "SET_VISIBILITY_FILETER":
			return action.visibilityFilter
		default:
			return state;
	}
}

export default visibilityFilter;

















