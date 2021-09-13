describe('Pruebas en el archivo demo.test.js', () => {
    test('debe de ser iguales los string', () => {

        // 1. inicializacion
        const mensaje = 'Hola mundo';

        // 2. estimulo
        const mensaje2 = `Hola mundo`;

        // 3. observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});