import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {IUser} from "../../../models/IUsers";


const initialState: AuthState = {
    isAuth: false,
    error: '',
    success: '',
    isLoading: false,
    user: {} as IUser
}

export default function authReducer(state=initialState, action: AuthAction): AuthState {
    switch (action.type){
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload}
        case AuthActionEnum.SET_SUCCESS:
            return {...state, success: action.payload}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload, isLoading: false}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }

}