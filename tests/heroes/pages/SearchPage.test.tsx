import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockedUsedNavigate,
}));

describe('Pruebas en <SearchPage />', () => {

    beforeEach( () => jest.clearAllMocks() );
    
    test('debe de mostrarse correctamente con valores por defecto', () => {
        
        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar a batman y el input con el valor del queryString', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman ']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const inputElement = screen.getByRole<HTMLInputElement>('textbox');
        const imgElement = screen.getByRole<HTMLImageElement>('img');
        const divSearchAlert = screen.getByLabelText('DivSearchAlert');
        const divDangerAlert = screen.getByLabelText('DivDangerAlert');
        
        expect( inputElement.value ).toBe( 'batman' );
        // expect( imgElement.src.includes('assets/heroes/dc-batman.jpg') ).toBeTruthy();
        expect( imgElement.src ).toContain('assets/heroes/dc-batman.jpg');
        // expect( divSearchAlert.getAttribute('style') ).toBe( 'display: none;' );
        expect( divSearchAlert.style.display ).toBe( 'none' );
        expect( divDangerAlert.style.display ).toBe( 'none' );
        
        // screen.debug();
        
    });
    
    test('debe de mostrar el error si no se encuentra el hero', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman1231ds']}>
                <SearchPage/>
            </MemoryRouter>
        )
        
        const divDangerAlert = screen.getByLabelText('DivDangerAlert');
        
        expect( divDangerAlert.style.display ).toBe( '' );
        
    });
    
    test('debe de llamar el navigate a la pantalla nueva', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        
        const inputElement = screen.getByRole<HTMLInputElement>('textbox');
        fireEvent.change(inputElement, { target: { name:"searchText", value: 'spiderman' } });

        fireEvent.submit(inputElement);

        expect( mockedUsedNavigate ).toHaveBeenCalledWith( '?q=spiderman' );

    });
    

});