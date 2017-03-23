
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combinReducers } from 'redux';

// combinReducers是用来合并相应的
const todoAPP = combinReducers({
	todos,
	visibilityFilter
});

export default todoAPP;