export const Action = Object.freeze({
    LoadMemories: 'LoadMemories',
    finishAddingNote: 'FinishAddingNote',
});
 
export function loadMemories(memories){
    return{
        type: Action.LoadMemories, 
        payload: memories,
    };
}

export function finishAddingNote(note){
    return{
        type: Action.finishAddingNote,
        payload: note,
    };
}

function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

/*
This is where we grab from app.js in the server api
*/

const host = 'http://letsdraw.duckdns.org:8450';

export function loadNote(month, day){
return dispatch => {
fetch(`${host}/notes/${month}/${day}`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
         if(data.ok){
             //check data.notes
                dispatch(loadMemories(data.notes));
            }
        })
    .catch(e=> console.error(e));
    };
}

export function startAddingNote(year, month, day){
    const note = { year, month, day, title: '', message: ''};
    const options = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    }
    return dispatch => {
    fetch(`${host}/notes`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
             if(data.ok) {
                note.id = data.id;
                dispatch(finishAddingNote(note));
                }
            })
        .catch(e=> console.error(e));
        };
    }