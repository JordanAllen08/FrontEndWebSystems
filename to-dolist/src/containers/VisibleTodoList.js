import {connect} from 'react-redux';
import TodoList from '../component/TodoList';


//reference page 
//https://stackoverflow.com/questions/33463789/redux-todo-list-example-how-todos-state-get-updated-depends-on-visibility-filt
//making Visibility filter
const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case visiblityFilter.SHOW_ALL:
            return todos;
        case visiblityFilter.SHOW_COMPLETED:
            return todos.filter(task => task.completed);
        case visiblityFilter.SHOW_ACTIVE:
            return todos.filter(task => !task.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visiblityFilter)
});

/*
const mapDispatchToProps = dispatch => (
    toggleTodo: id => dispatch(toggleTodo(id))
);
*/

export default connect()(TodoList);