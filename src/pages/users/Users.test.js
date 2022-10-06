import axios from "axios";
import resUsers from "./user.json";
import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";
import {renderWithRouter} from "../../helpers/renderWithRouter";

jest.mock('axios');
describe('users ', () => {
    let response = {
        data: resUsers
    };

    beforeEach(() => {
        axios.get.mockReturnValue(response);
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('render users', async () => {
        renderWithRouter('/user');
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    })

    test('click on users', async () => {
        renderWithRouter('/user');
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        userEvent.click(users[0]);
        expect(axios.get).toBeCalledTimes(1);
        expect(screen.getByTestId('page-user-details')).toBeInTheDocument()
        screen.debug();
    })
})
