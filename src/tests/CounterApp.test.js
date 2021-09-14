import {shallow} from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas sobre CounterApp', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    test('Debe de mostrar <CounterApp/> correctamente', () => {

        const h1 = 'CounterApp';
        const h2 = '10';

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text()).toBe(h1);
        expect(wrapper.find('h2').text().trim()).toBe(h2);
    });

    test('Debe de mostrar el valor por defecto de 10', () => {

        const h2 = '100';

        const wrapper = shallow(<CounterApp value={100}/>);

        expect(wrapper.find('h2').text().trim()).toBe(h2);
    });

    test('Debe de incrementar con el boton de +1', () => {

        const btn1 = wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');

    });


    test('Debe de decrementar con el boton de -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');

    });
});