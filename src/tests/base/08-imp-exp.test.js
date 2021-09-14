import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas de funciones de Héroes', () => {

    test('debe de retornar un héroe por id', () => {

        const id = 2;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual(heroeData);
    });

    test('debe de retornar undefined si Héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });

    test('debe retornar un arreglo con los héroes de DC',() => {

        const owner = 'DC';
        const owners = getHeroesByOwner(owner);

        const ownersData = heroes.filter( h => h.owner === owner);

        expect(owners).toEqual(ownersData);

    });

    test('debe retonar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const owners = getHeroesByOwner(owner);

        expect(owners.length).toBe(2);

    });
});