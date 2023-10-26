import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

describe("<Footer />", () => {
    it("renders a copyright", () => {
        render (
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )

       

        const copyRight = screen.getByText(/© 2023 adrian, ilene, and anabella aka: housing hackers/i)
        expect(copyRight).toBeInTheDocument()
    })
})