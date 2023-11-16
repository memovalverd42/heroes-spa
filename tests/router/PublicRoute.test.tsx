import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthContext, AuthContextProps } from '../../src/auth/context/AuthContext';
import { PublicRoute } from '../../src/router/PublicRoute';
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en <PublicRoute />', () => {
    
    test('debe de mostrar el children si no está autenticado', () => {

        const contextValue: AuthContextProps = {
            authState: {logged: false},
            login: (name?: string) => {},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta publica') ).toBeTruthy();

    });

    test('debe de navegar si está autenticado', () => {
        
        const contextValue: AuthContextProps = {
            authState: {logged: true, name: 'Memo'},
            login: (name?: string) => {},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={ 
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={ <h1>Marvel Page</h1> } />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Marvel Page') ).toBeTruthy();

    });

});