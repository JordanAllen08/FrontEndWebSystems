import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

//form for To-do List application

//Add button
const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
            onSubmit={
                e => {
                    e.preventDefault();
                
                //check if input is nonexistent
                if(!input.value.trim()){
                    return
                }

                // test input value 
                //input.value='type item here';

                //dispatches values entered to text box
                dispatch(addTodo(input.value));

                //resets input so it appear null instead of previous text
                input.value='';

                //Below is the button creation of the form
            }

        }
    >
                
                <input type="text" class='textbox' ref={el => (input = el)} />
                <button type='submit' class='btnsub'>Submit Item</button>
            </form>
        </div>
    );
}

export default connect()(AddTodo);