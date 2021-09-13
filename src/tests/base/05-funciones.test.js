import {getUser, getUsuarioActivo} from "../../base/05-funciones";

describe('Pruebas de 05-funciones', () => {
    test('getUser debe retonar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );
    });

    test('getUsuarioActivo debe retonar un objeto', () => {

        const nameTest = 'Carlos';
        const userTest =  {
            uid: 'ABC567',
            username: nameTest
        };

        const userActive = getUsuarioActivo(nameTest);

        expect( userActive ).toEqual( userTest );

    });
})