import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode, startSavingNote} from './action';

const months = ["January", "Feburary", "March","April","May","June","July","August","September","October","November","December"];





export function Memory(props) {
    const memory= props.memory;
    const dispatch = useDispatch();

    const [year, setYear] = useState(memory.year);
    const [month, setMonth] = useState(memory.month);
    const [day, setDay] = useState(memory.day)
    //const [title, setTitle] = useState()
    const [message, setMessage] = useState(memory.message);

    const onEdit = () => {
        dispatch(enterEditMode(memory));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(memory));
    }

    const onSave = () => {
        dispatch(startSavingNote({
            id: memory.id,
            year,
            month,
            day,
            message
        }));
    }

if(memory.isEditing){

    return(
        <div className = "memory">
            {memory.title}
            <div className= "memory-left">
                <input type="text" value={year} onChange={e =>
                setYear(parseInt(e.target.value))}/>

                <input type="text" value={month}onChange={e =>
                setMonth(parseInt(e.target.value))}></input>

                <input type="text" value={day}onChange={e =>
                setDay(parseInt(e.target.value))}></input>
                
                <button onClick={onSave}>save</button>
                <button onClick={onCancel}>cancel</button>
            </div>
            <div className="memory-right">
                <textarea value={message} onChange={e =>
                setMessage((e.target.value))}></textarea>
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