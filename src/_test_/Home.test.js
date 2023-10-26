import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

describe("<Home />", () => {
    it("renders a introduction", () => {
        render(
            <BrowserRouter>
            <Home/>
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const homeHeading = screen.getByRole("heading", {
            name: "Find your new apartment here at Twilight Towers!"
        })
        expect (homeHeading).toBeInTheDocument()
    })

})