# React Front End

```git
$ yarn create react-app apartment-app-frontend
$ cd apartment-app-frontend
$ yarn add react-router-dom
$ yarn add bootstrap
$ yarn add reactstrap
```
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
```git
$ yarn start
```
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
Ask your instructors for branch protection

We added components to src. The components, pages, assets folder. Then we added the basic structure to each file inside of the components. 

Then we worked on the header. Made it beautiful and then did the testing for it. 
```jsx
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
```

We then added the footer with our names and team name. 

Afterwards, we started working on the home page and the not found page along with the testing for them. 