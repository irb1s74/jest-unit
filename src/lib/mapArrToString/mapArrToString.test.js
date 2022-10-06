import {mapArrToString} from "./mapArrToString";

describe('mapArrToString', () => {
    test('current value', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('with any values', () => {
        expect(mapArrToString([1, 2, 4, undefined, null])).toEqual(["1", "2", "4"]);
    })
    test('Empty array', () => {
        expect(mapArrToString([])).toEqual([])
    })
    test("Not", () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3])
    })
})
