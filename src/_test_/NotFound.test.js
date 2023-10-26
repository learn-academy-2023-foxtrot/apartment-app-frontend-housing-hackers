import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'

describe("<NotFound />", () => {
    it("renders an image on the not found page", () => {
        render(
            <BrowserRouter>
            <NotFound />
            </BrowserRouter>
        )
     screen.debug()
    })
})