import React from "react";
import { AuthContext, AuthContextProps } from "../../src/auth/context";
import { render, screen } from "@testing-library/react";
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivateRoute />', () => {
    
    test('debe de mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue: AuthContextProps = {
            authState: {logged: true, name: 'Memo'},
            login: (name?: string) => {},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel");

    });

});