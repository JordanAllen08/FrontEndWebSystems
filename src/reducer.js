import {Action} from './action';

const initialState = {
    isWaiting: false,
    memories: [],
};

function reducer(state = initialState, action) {
    switch(action.type) {
    case Action.LoadMemories:
        return {
            ...state,
            memories: action.payload,
        }
    case Action.finishAddingNote:
        return {
            ...state,
            memories: [action.payload, ...state.memories],
        }; 
    default:
        return state;
    }
}

export default reducer;