import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({
            type: TodoActionTypes.FETCH_TODO
        })
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos",{
            params: {
                _page: page,
                _limit: limit
            }
        })
        setTimeout(() => {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_SUCCESS,
                payload: data
            })
        }, 500)
    } catch (error) {
        dispatch({
            type: TodoActionTypes.FETCH_TODO_ERROR,
            payload: error.message
        })
    }
}

export const setTodoPage = (page: number) => {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}
