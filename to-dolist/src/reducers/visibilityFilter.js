import { VisibilityFilters } from '../actions';

//state by default shows all information // Action 
//will later decides what gets shown and what doesn't from my understanding
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;