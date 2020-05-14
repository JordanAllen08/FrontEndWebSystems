import {connect} from 'react-redux';
import { VisibilityFilters } from '../actions'
import TodoList from '../component/TodoList';


//reference page 
//https://stackoverflow.com/questions/33463789/redux-todo-list-example-how-todos-state-get-updated-depends-on-visibility-filt
//making Visibility filter
const getVisibleTodos = (todos, filter) => {
    switch(filter){
        //returns everything
        case VisibilityFilters.SHOW_ALL:
            return todos;
        //returns completed
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(task => task.completed);
        //returns active items
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(task => !task.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}

//passed from visibility Filter and goes to actions index.js
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

//prop passing I have been saving!
//used in toggle todo
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});


export default connect(
    mapStateToProps
)(TodoList);