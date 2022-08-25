import {ADDTODO,COMPLETEDTODO,DELETETODO,CLEARTODO,FILTERTODO, SHOWCOMPLETED, CLEARCOMPLETED} from "./types"
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

export const completedTodo = (info) => {
    return {
        type: COMPLETEDTODO,
        payload:info
    }
}


export const filterTodo = (info) => {
    return {
        type: FILTERTODO,
       payload:info
    }
}

export const showCompeleted = (info) => {
    return {
        type: SHOWCOMPLETED,
    }
}

export const clearCompeleted = (info) => {
    return {
        type: CLEARCOMPLETED,
    }
}