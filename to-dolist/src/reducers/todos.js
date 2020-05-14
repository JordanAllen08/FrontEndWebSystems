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

            //returns default state value
            default:
                return state;
    }
}

export default todos;