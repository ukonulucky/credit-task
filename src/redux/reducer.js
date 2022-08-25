import { ADDTODO, CLEARTODO,DELETETODO,COMPLETEDTODO,FILTERTODO, SHOWCOMPLETED, CLEARCOMPLETED} from "./types";


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
                todo: [...state.todo, {
                    item: action.payload,
                    done: false,
                    id:Math.random()
              }]
            }
            break;
        
        case DELETETODO:
            
            const itemIndex = state.todo.findIndex(i => i.id === action.payload)
            const newTodoList = [...state.todo]
            if (itemIndex >=  0) {
                const todoModified = newTodoList.splice(itemIndex, 1)
            } else {
                console.warn("item not in the basket")
            }
                 return {
                     todo:[...newTodoList]
                 }
            break;
        case CLEARTODO:
            
                 return {
                     todo :  []
                 }
            break;   
            case SHOWCOMPLETED:
            const completedTodo = state.todo.filter(i => i.done === true)
                return {
                    ...state, completedTodo:  [...completedTodo]
                }
            break;  
            case CLEARCOMPLETED:
                const clearCompletedTodo = state.todo.filter(i => i.done === false)
                    return {
                        todo :  [...clearCompletedTodo]
                    }
               break;  
        case COMPLETEDTODO:
            console.log(action.payload)
            const checkedIndex = state.todo.findIndex(i => i.id === action.payload)
            state.todo[checkedIndex] = {
                    ...state.todo[checkedIndex], done:true
            }
            console.log(state.todo[checkedIndex])
            return {
                    todo :  [...state.todo]
                }
           break; 
       default: return state
           break;
   }
}

export default stateReducer