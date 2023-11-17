import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from '../../src/ui/components/Navbar';
import { AuthContext, AuthContextProps } from "../../src/auth/context";
import { PrivateRoute } from "../../src/router";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockedUsedNavigate,
}));

describe('Pruebas en el componente de <Navbar />', () => {

    beforeEach( () => jest.clearAllMocks() );
    
    test('debe de mostrar el nombre del usuario loggueado', () => {

        const contextValue: AuthContextProps = {
            authState: {logged: true, name: 'Memo'},
            login: (name?: string) => {},
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <Navbar/>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Memo' ) ).toBeTruthy();

    });

    test('debe de llamar el logout() y navigate() cuando se hace click en el boton', () => {

        const logout = jest.fn();
        
        const contextValue: AuthContextProps = {
            authState: {logged: true, name: 'Memo'},
            login: (name?: string) => {},
            logout: logout
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <Navbar/>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const buttonElement = screen.getByRole<HTMLButtonElement>('button');

        fireEvent.click(buttonElement);

        expect( logout ).toHaveBeenCalled();
        expect( mockedUsedNavigate ).toHaveBeenCalledWith('/login', {
            replace: true
        });

        // screen.debug();

    });

});