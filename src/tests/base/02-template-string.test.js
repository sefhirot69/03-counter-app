import {getSaludo} from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retonar hola Jose', () => {

        const nombre = 'Jose';

        const saludo = getSaludo(nombre);
        console.log(saludo);

        expect(saludo).toBe(`Hola ${nombre}`)
    });

    test('getSaludo debe retonar hola Carlos', () => {
        const name = 'Carlos';

        const greeting = getSaludo();
        console.log(greeting);

        expect(greeting).toBe(`Hola ${name}`);
    });
});