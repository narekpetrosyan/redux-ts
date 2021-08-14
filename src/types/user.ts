export interface UserStateInterface {
    users: Array<any>,
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUserActionInterface {
    type: UserActionTypes.FETCH_USERS,
    payload?:any
}

interface FetchUserSuccessActionInterface {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUserErrorActionInterface {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUserActionInterface | FetchUserSuccessActionInterface | FetchUserErrorActionInterface
