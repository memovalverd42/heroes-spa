
export interface AuthState {
    logged: boolean,
    name?: string
}

export const types = {
    login:  '[Auth] Login',
    logout: '[Auth] Logout'
}

export type Action = 
    | { type: '[Auth] Login', payload: string }
    | { type: '[Auth] Logout' }
