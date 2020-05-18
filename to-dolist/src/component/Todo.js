import React from 'react';

//what happens upon clicking!
//This is where our tasks are created
const Todo = ({onClick, completed, text}) => (
    <li 
    onClick={onClick}
    style={{
        //textDecoration if completed is true = 'line-through' if not 'nothing!'
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? 'Red' : 'white'
    }}
    >
        {text}
    </li>
);

export default Todo;