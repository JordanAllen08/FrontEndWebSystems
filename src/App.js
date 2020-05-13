import React, {useEffect} from 'react';
import './App.css'
//import {Notes} from './Notes';
import {Memory} from './Notes'
import {useSelector, useDispatch} from 'react-redux';
import {loadNote, startAddingNote} from './action';

const date = new Date(); 
const year = date.getFullYear;
const month = date.getMonth() + 1;
const day = date.getDate();

function App(){

  //const notes = useSelector(state => state.noteText);
    const memories = useSelector(state => state.memories);
    const dispatch = useDispatch();


/*
    useEffect(() => {
    dispatch(loadNote(month, day));
    }, [dispatch]);
*/



useEffect(() => {
    dispatch(loadNote(8, 16));
    }, [dispatch]);


    const addNote = () => {
        dispatch(startAddingNote(year, month, day));
    }


    return(
        
        <div className="memories-root"> 
        <button onClick={addNote}>New Note</button>
            {memories.map(memory => <Memory key ={memory.id} memory={memory}/>)}
        </div>
        

    );
}

export default App;