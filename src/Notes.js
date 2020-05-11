import React from 'react';

const months = ["January", "Feburary", "March","April","May","June","July","August","September","October","November","December"];





export function Memory(props) {
    const memory= props.memory;

    return(
        <div className = "memory">
            {memory.title}
            <div className= "memory-left">
    <span className="year">{memory.year}</span>
    <span>{months[memory.month-1]} {memory.day}</span>        
            </div>
            <div className="memory-right">
                {memory.message}
            </div> 
        </div>

    );


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