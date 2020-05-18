import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'

/*
Attempt at remove todo so SQL could have the option of getting rid of older tasks
*/
let RemoveTodo = ({dispatch}) => {
    return(
        <div>
            <a onClick={ e => {
                e.preventDefault()

            }}>Remove Todo</a>
        </div>
    )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo