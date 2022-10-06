import axios from "axios";
import resUsers from "./users.json";
import Users from "./Users";
import {render, screen} from "@testing-library/react";

jest.mock('axios');
describe('users ', () => {
    let response;
    beforeEach(() => {
        response = {data: resUsers}
    })
    test('render users', async () => {
        axios.get.mockReturnValue(response);
        render(<Users/>);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    })
})
