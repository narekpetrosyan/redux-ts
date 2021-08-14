import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActions from "../store/actions/UserActions"
import * as TodoActions from "../store/actions/TodoActions"

const actions = {
    ...UserActions,
    ...TodoActions
}

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions,dispatch)
}
