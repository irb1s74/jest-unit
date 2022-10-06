import {MemoryRouter} from "react-router-dom";
import AppRouter from "../router/AppRouter";
import {render} from "@testing-library/react";

export const renderWithRouter = (initialRoute, component) => (
    render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter/>
            {component}
        </MemoryRouter>
    )
)
