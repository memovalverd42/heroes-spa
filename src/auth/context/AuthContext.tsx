import { createContext } from "react";
import { AuthState } from "../types/types";

export interface AuthContextProps {
    authState: AuthState;
    login: ( name?: string ) => void;
    logout: () => void
}

export const AuthContext = createContext({} as AuthContextProps);