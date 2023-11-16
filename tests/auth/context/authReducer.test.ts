import { authReducer } from '../../../src/auth/context/authReducer';
import { Action } from '../../../src/auth/types/types';


describe('Pruebas en authReducer()', () => {

    const initialState = {
        logged: false,
    }
    
    test('debe de retornar el valor por defecto', () => {
        
        const state = authReducer( initialState, {} as Action )

        expect( state ).toBe( initialState );

    });

    test('debe de llamar el login y autenticar el usuario', () => {
        
        const action: Action = {
            type: '[Auth] Login',
            payload: "Guillermo"
        }

        const state = authReducer( initialState, action );

        expect( state ).toEqual({
            logged: true,
            name: "Guillermo"
        });

    });

    test('debe de llamar el logout y borrar el name del usuario y logged en false', () => {
        
        const initialStateLogged = {
            logged: true,
            name: "Guillermo"
        }

        const action: Action = {
            type: '[Auth] Logout',
        }

        const state = authReducer( initialStateLogged, action );

        expect( state ).toEqual( initialState );

    });

});