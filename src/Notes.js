import React from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode} from './action';

const months = ["January", "Feburary", "March","April","May","June","July","August","September","October","November","December"];





export function Memory(props) {
    const memory= props.memory;
    const dispatch = useDispatch();

    const onEdit = () => {
        dispatch(enterEditMode(memory));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(memory));
    }


if(memory.isEditing){

    return(
        <div className = "memory">
            {memory.title}
            <div className= "memory-left">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>save</button>
                <button onClick={onCancel}>cancel</button>
            </div>
            <div className="memory-right">
                <textarea />
            </div> 
        </div>

    );

} else{
    return(
        <div className = "memory">
            {memory.title}
            <div className= "memory-left">
    <span className="year">{memory.year}</span>
    <span>{months[memory.month-1]} {memory.day}</span>     
    <button onClick={onEdit}>NoteText</button>   
            </div>
            <div className="memory-right">
                {memory.message}
            </div> 
        </div>

    );

    }
}



/*
export function Notes(props){
    const note = props.note;

    return(
        <div className="notes">
            <div className="note-left">
            <span className = "title">{note.title}</span>
    <span>{note.noteText.title} {note.noteText.message}</span>
            </div>

            <div className="note-right">
                {note.message}
            </div>
        </div>

    );

}
*/