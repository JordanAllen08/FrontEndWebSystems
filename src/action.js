export const Action = Object.freeze({
    LoadMemories: 'LoadMemories',
    FinishAddingNote: 'FinishAddingNote',
    EnterEditMode: 'EnterEditMode',
    LeaveEditMode: 'LeaveEditMode',
    FinishSavingNote: 'FinishSavingNote',
});
 
export function loadMemories(memories){
    return{
        type: Action.LoadMemories, 
        payload: memories,
    };
}

export function enterEditMode(note){
    return{
        type: Action.EnterEditMode,
        payload: note,
    };
}

export function leaveEditMode(note){
    return{
        type: Action.LeaveEditMode,
        payload: note,
    };
}

export function finishAddingNote(note){
    return{
        type: Action.FinishAddingNote,
        payload: note,
    };
}

export function finishSavingNote(note){
    return{
        type: Action.FinishSavingNote,
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


    export function startSavingNote(note){
        const options = {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        }

        return dispatch => {
        fetch(`${host}/notes/${note.id}`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                 if(data.ok) {
                    dispatch(finishSavingNote(note));
                    }
                })
            .catch(e=> console.error(e));
            };
        }