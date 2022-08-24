import { ADDTODO, CLEARTODO,DELETETODO,COMPLETEDTODO,FILTERTODO} from "./types";


const initialState = {
    todo:[]
}

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERTODO:
            const newTodo = state.filter((i) => {
           return  i.includes(action.payload)
         })
            return {
                todo:[...newTodo]
       }   
           break;
   
       case ADDTODO:
          
            return {
              todo:[...state, action.payload]
            }
            break;
        
        case DELETETODO:
            const item = state.todo.findIndex(i => i.index === action.payload)
            const todoModified = state.todo.splice(item,1)
                 return {
                     ...state
                 }
            break;
        case CLEARTODO:
            
                 return {
                     todo :  []
                 }
            break;      
       default: return state
           break;
   }
}

export default stateReducer