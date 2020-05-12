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

    case Action.EnterEditMode:
         return {
            ...state,
            memories: state.memories.map(memory => {
                if(memory.id === action.payload.id){
                    return{...memory, isEditing: true};
                } else {
                    return memory;
                }
            }),
            };     

            case Action.LeaveEditMode:
                return {
                   ...state,
                   memories: state.memories.map(memory => {
                       if(memory.id === action.payload.id){
                           return{...memory, isEditing: undefined};
                       } else {
                           return memory;
                       }
                   }),
                   };  
    default:
        return state;
    }

    
}

export default reducer;