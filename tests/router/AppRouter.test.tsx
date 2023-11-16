import React from 'react';
import { render, screen } from '@testing-library/react';
import { AuthContext, AuthContextProps } from '../../src/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';


describe('Pruebas en <AppRouter />', () => {
    
    test('debe de mostrar el login si no está autenticado', () => {

        const contextValue: AuthContextProps = {
            authState: {logged: false},
            login: (name?: string) => {},
            logout: () => {}
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue} >
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length ).toBe(2); 

    });

    test('debe de mostrar el componente de marvel si está autenticado', () => {
        
        const contextValue: AuthContextProps = {
            authState: {logged: true, name: 'Memo'},
            login: (name?: string) => {},
            logout: () => {}
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue} >
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('Memo') ).toBeTruthy();

    });

});
