import {UserAction, UserActionTypes, UserStateInterface} from "../../types/user";

const initialState: UserStateInterface = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserStateInterface => {
    const {type, payload} = action
    switch (type) {
        case UserActionTypes.FETCH_USERS:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                loading: false,
                error: payload,
                users: []
            }
        default:
            return state;
    }
}
