import Nav from '../components/Nav'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from "react-router";

test("when Nav components rendered should have ButtonAdd", () => {
    render(<MemoryRouter><Nav/></MemoryRouter>)
    const ButtonAdd = screen.getByText(/Añadir póster/i)
    expect(ButtonAdd).toBeDefined();
})