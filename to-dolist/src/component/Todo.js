import React from 'react';

//This is where our tasks are created
const Todo = ({onClick, completed, text}) => (
    <li>
        {text}
    </li>
);

export default Todo;