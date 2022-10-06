import axios from "axios";
import {getData} from "./getData";
import resUsers from './users.json'

jest.mock('axios');

describe('getData', () => {
    let response = {
        data: resUsers
    };
    beforeEach(() => {
        response = {
            data: resUsers
        };
    })

    test('validate data', async () => {
        axios.get.mockReturnValue(response);
        const data = await getData();
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(['1', '2', '3'])
        expect(data).toMatchSnapshot()
    })
})
