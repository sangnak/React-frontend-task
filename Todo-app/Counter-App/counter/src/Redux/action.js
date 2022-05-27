import {  INC_COUNT } from "./action.type";
import { DEC_COUNT } from "./action.type";
import { ADD_TODO , ADD_TODO_LOADING, ADD_TODO_LOADING_SUCCESS,GET_TODO_LOADING,GET_TODO_LOADING_SUCCESS } from "./action.type";


export const inc_COUNT = (payload) =>({

        type: INC_COUNT,
        payload,

})

export const dec_COUNT =(payload) =>({
 
        type: DEC_COUNT,
        payload,
 
})
export const addTodo =(payload)=>({
        type:ADD_TODO,
        payload,
})

export const addTodoLoading =()=>({
        type:ADD_TODO_LOADING,
})

export const addTodoLoadingSuccess=(payload)=>({
        type:ADD_TODO_LOADING_SUCCESS,
        payload,
})


export const getTodoLoading =()=>({
        type:GET_TODO_LOADING
})

export const getTodoLoadingSuccess =(payload)=>({
        type:GET_TODO_LOADING_SUCCESS,
        payload,
})