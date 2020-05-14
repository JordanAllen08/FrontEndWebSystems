import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

//reducer starter
export default combineReducers({
    todos,
    visibilityFilter
});