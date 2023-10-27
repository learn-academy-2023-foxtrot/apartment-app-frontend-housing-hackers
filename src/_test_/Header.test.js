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
      
    })
    it("has a navigation link to index page", () => {
        const indexLink = screen.getByText(/view apartments/i)
        expect(indexLink).toBeInTheDocument()
    })

    
    it("has a navigation link to new page", () => {
        const indexLink = screen.getByText(/Add Apartments/i)
        expect(indexLink).toBeInTheDocument()
    })
})