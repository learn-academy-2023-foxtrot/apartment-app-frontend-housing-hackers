import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from  "../components/Header"

describe("<Header />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter> 
                <Header />
            </BrowserRouter>
        )
        screen.debug()
        screen.logTestingPlaygroundURL()
    })
    it("has a navigation link to index page", () => {
        const indexLink = screen.getByRole('link', { name: /view apartments/i })
        expect(indexLink).toHaveAttribute("href", "/aptindex")
    })

    
    it("has a navigation link to new page", () => {
        const indexLink = screen.getByRole('link', { name: /Add Apartments/i })
        expect(indexLink).toHaveAttribute("href", "/aptnew")
    })
})