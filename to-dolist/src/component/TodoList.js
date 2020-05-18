import React from 'react';
import Todo from './Todo';
//import {useDispatch} from 'react-redux';

//todo list where we pass the props
const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => (
            <Todo key ={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
        ))}
    </ul>
);

//reminece of trying to get dispatch to work for SQL
/*
export function todos(props) {
const todos= props.todo;
const dispatch = useDispatch();
}


*/



export default TodoList;