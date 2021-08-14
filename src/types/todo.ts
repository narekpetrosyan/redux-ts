export interface TodoStateInterface {
    todos: Array<any>,
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchTodoActionInterface {
    type: TodoActionTypes.FETCH_TODO,
    payload?: any
}

interface FetchTodoSuccessActionInterface {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: any[]
}

interface FetchTodoErrorActionInterface {
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload: string
}

interface SetTodoPageActionInterface {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: any[]
}


export type TodoAction = FetchTodoActionInterface | FetchTodoSuccessActionInterface | FetchTodoErrorActionInterface | SetTodoPageActionInterface;
