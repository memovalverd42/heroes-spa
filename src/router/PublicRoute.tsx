import { FC, useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: JSX.Element | JSX.Element[]
}

export const PublicRoute: FC<PublicRouteProps> = ( {children} ) => {

    const { authState } = useContext( AuthContext );

    return ( !authState.logged )
        ? children
        : <Navigate to='/marvel' />

}
