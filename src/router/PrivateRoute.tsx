import { FC, useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
    children: JSX.Element | JSX.Element[]
}

export const PrivateRoute: FC<PrivateRouteProps> = ( {children} ) => {

    const { authState } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem( 'lastPath', lastPath );

    return ( authState.logged )
        ? children
        : <Navigate to='/login' />

}
