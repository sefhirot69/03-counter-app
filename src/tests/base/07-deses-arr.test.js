import {retornaArreglo} from "../../base/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('debe retonar un string y un numero', () => {
        const stringTest = 'ABC';
        const numberTest = 123;

        const [string, number] = retornaArreglo();

        expect( string ).toBe(stringTest);
        expect( typeof string ).toBe('string');
        expect( number ).toBe(numberTest);
        expect( typeof number ).toBe('number');
    });

});