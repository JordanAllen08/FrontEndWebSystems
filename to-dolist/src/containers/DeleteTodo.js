import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'

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