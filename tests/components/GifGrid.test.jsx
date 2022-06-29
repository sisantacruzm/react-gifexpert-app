import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( '../../src/hooks/useFetchGifs' )

describe( "Pruebas en <GifGrid />", () => {
  const category = "One Pounch";

  test( "debe de mostrar el loading inicialmente", () => {

    useFetchGifs.mockReturnValue( {
      images   : [],
      isLoading: true
    } )

    render( <GifGrid category={ category }/> );
    expect( screen.getByText( "Cargando..." ) );
    expect( screen.getByText( category ) );

  } );

  test( 'debe de mostrar items cuando se cargan las imagenes useFetchGifs()', () => {

    const gifs = [
      {
        id   : 'ABC',
        title: 'Saitama',
        url  : 'htps://localhost/saitama.jpg'
      },
      {
        id   : '123',
        title: 'Goku',
        url  : 'htps://localhost/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue( {
      images   : gifs,
      isLoading: false
    } )

    render( <GifGrid category={ category }/> );
    expect( screen.getAllByRole( 'img' ).length ).toBe( 2 )


  } )

} );
