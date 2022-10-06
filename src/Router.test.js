import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRouter} from "./helpers/renderWithRouter";
import Navbar from "./components/Navbar/Navbar";

describe("router", () => {
    test("router test", () => {
        renderWithRouter('/', <Navbar/>)
        const mainLink = screen.getByTestId("link-main");
        const aboutLink = screen.getByTestId("link-about");
        userEvent.click(aboutLink)
        expect(screen.getByTestId("page-about")).toBeInTheDocument()
        userEvent.click(mainLink)
        expect(screen.getByTestId("page-main")).toBeInTheDocument()
    })

    test("router not found page", () => {
        renderWithRouter('/someUnExistPage')
        expect(screen.getByTestId("page-not-found")).toBeInTheDocument()
    })
})
