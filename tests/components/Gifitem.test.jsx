import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components";


describe('Pruebas sobre el componente <GitItem />', () => {

    const title = 'Saitama'
    const url   = 'https://one-punch.com./saitama.jpg'

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url }/> )
        expect( container ).toMatchSnapshot()

    })

    test('debe de mostrar la imagen con el URL y ALT indicado', () => {
        
        render( <GifItem title={ title } url={ url }/> )

        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )

    })

    test('debe de mostrar el titulo en el componente', () => {
    
        render( <GifItem title={ title } url={ url }/> )
        expect( screen.getByText( title ) ).toBeTruthy()
        
    })

})