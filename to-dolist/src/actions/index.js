/*
Actions to pass and maintain whats going on
--note highly connected to reducers/todos.js
*/

let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

//sends to visivilityFilter.js
//or who ever calls it
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const toggleTodo = id => ({
    type: 'TOGGLE_line',
    id
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});