import { FC, useReducer } from "react"
import { AuthContext, authReducer } from "."
import { Action, AuthState } from "../types/types"

interface AuthProviderProps {
    children: JSX.Element | JSX.Element[]
}

const init = (): AuthState => {
    const user: string = localStorage.getItem('user')!;
    return {
        logged: !!user, 
        name: user
    }
}

export const AuthProvider: FC<AuthProviderProps> = ( { children } ) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = ( name = '' ) => {

        const action: Action = {
            type: '[Auth] Login',
            payload: name
        }
        localStorage.setItem( 'user', name );
        dispatch(action);

    }

    const logout = () => {
        const action: Action = {
            type: '[Auth] Logout',
        }

        localStorage.removeItem('user');
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={ {authState, login, logout} } >
            { children }
        </AuthContext.Provider>
    )
}
