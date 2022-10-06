import {square} from "./square";

describe('square', () => {
    let mockValue;
    beforeEach(() => {

    })
    beforeAll(() => {

    })

    test('test with 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    test('test correct value', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })


    afterEach(() => {

    })
    afterAll(() => {

    })
})
