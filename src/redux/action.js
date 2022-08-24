import {ADDTODO,COMPLETEDTODO,DELETETODO,CLEARTODO,FILTERTODO} from "./types"
export const addTodo = (info) => {
    return {
        type: ADDTODO,
        payload: info
    }
}
export const deleteTodo = (info) => {
    return {
        type: DELETETODO,
        payload:info
    }
}

export const clearTodo = (info) => {
    return {
        type: CLEARTODO,
        payload:info
    }
}

export const depositUser = (info) => {
    return {
        type: DEPOSIT,
        payload:info
        
    }
   
}
export const filterTodo = (info) => {
    return {
        type: FILTERTODO,
       payload:info
    }
}