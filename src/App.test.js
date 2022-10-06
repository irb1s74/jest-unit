import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";


describe('app', () => {
    test("render react", async () => {
        render(<MemoryRouter>
            <App/>
        </MemoryRouter>)
        screen.debug()
        const linkElement = await screen.findByText(/data/i);
        expect(linkElement).toBeInTheDocument()
        screen.debug()
    })

    test("toggle btn", () => {
        render(<MemoryRouter>
            <App/>
        </MemoryRouter>)
        const btn = screen.getByTestId("toggle-btn");
        expect(screen.queryByTestId("toggled-item")).toBeNull();
        fireEvent.click(btn)
        expect(screen.queryByTestId("toggled-item")).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.queryByTestId("toggled-item")).toBeNull()
    })

    test("change input value", () => {
        render(<MemoryRouter>
            <App/>
        </MemoryRouter>)
        const input = screen.getByTestId("input");
        expect(screen.queryByTestId("input-value")).toContainHTML("")
        // fireEvent.input(input, {
        //     target: {value: '123'}
        // })
        userEvent.type(input, '123')
        expect(screen.queryByTestId("input-value")).toContainHTML("123")
    })
})


