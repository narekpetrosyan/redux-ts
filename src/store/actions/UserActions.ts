import {Dispatch} from "redux";
import axios from "axios";
import {UserAction, UserActionTypes} from "../../types/user";

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({
            type: UserActionTypes.FETCH_USERS
        })
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setTimeout(() => {
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: data
            })
        },500)
    }catch (error){
        dispatch({
            type: UserActionTypes.FETCH_USERS_ERROR,
            payload: error.message
        })
    }
}
