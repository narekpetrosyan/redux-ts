import {TodoAction, TodoActionTypes, TodoStateInterface} from "../../types/todo";

const initialState:TodoStateInterface = {
    todos: [],
    loading:false,
    error:null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState,action:TodoAction):TodoStateInterface => {
    const {type,payload} = action
    switch (type){
        case TodoActionTypes.FETCH_TODO:
            return {
                ...state,
                loading: true
            }
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {
                ...state,
                loading:false,
                todos: payload
            }
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case TodoActionTypes.SET_TODO_PAGE:
            return {
                ...state,
                page: payload
            }
        default:
            return state
    }
}
