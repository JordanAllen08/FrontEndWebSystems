/*
Actions to pass and maintain whats going on
--note highly connected to reducers/todos.js

export const Action = Object.freeze({
    AddToDo: 'addTodo',
   
});

*/




let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

//delete
export const deleteTodo = id =>{
    return {
        type: 'DELETE_TODO',
        id: id
    }
}



/*
export function loadTo-dos(text){
    return{
        type: Action.Loadtodo, 
        payload: todo,
    };
}
*/
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

/*

function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}


const host = 'http://letsdraw.duckdns.org:3443';


export function loadtodo(id){
return dispatch => {
fetch(`${host}/todo/${id}`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
         if(data.ok){

                dispatch(loadtodos(data.todo));
            }
        })
    .catch(e=> console.error(e));
    };
}

*/