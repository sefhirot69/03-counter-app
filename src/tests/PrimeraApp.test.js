import {render} from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    test('debe de mostrar el mensaje "Hola soy Goku"', () => {

        const saludo = 'Hola soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument()
    });

});