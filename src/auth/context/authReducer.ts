import { Action, AuthState } from "../types/types";

export const authReducer = ( state: AuthState, action: Action ): AuthState => {

    switch ( action.type ) {
        case "[Auth] Login":
            return {
                ...state,
                logged: true,
                name: action.payload
            };
            
        case "[Auth] Logout":
            return {
                logged: false,
            };
            
        default:
            return state;
    }

}