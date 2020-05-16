const todos = (state = [], action) => {
    switch (action.type){
        //this case will add the Text after (Add Todo is clicked)
        case 'ADD_TODO':
            return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
            ];
            //adds toggle action
            case 'TOGGLE_line':
                return state.map(todo => 
                    todo.id === action.id ? {...todo, completed: !todo.completed} : todo
                    );

            case 'DELETE_TODO':
                return state.filter(todo => todo.id !== action.id);
                
            

            //returns default state value

            /*
             case 'ADD_OLD_TODO':
            return [
            ...state,
            {
                id: action.id,
                ...state,
                text: action.payload,
                
            }
            ];
            */




            default:
                return state;
    }
}

export default todos;