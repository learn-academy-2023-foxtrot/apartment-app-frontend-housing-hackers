import React from "react"
import { NavLink, Navbar, NavbarBrand } from "reactstrap"

const Header = () => {
    return (
        <>
          <Navbar color="black" dark>
            <NavbarBrand href="/" id="title">
              Twilight Towers
            </NavbarBrand>
            <div className="text-container">
              <NavLink href="/aptindex" id="nav-text">
                View Apartments
              </NavLink>
              <NavLink href="/aptnew" id="nav-text">
                Add Apartments 
              </NavLink>
              <NavLink href="/signin" id="nav-text">
                Sign In
            </NavLink>
            <NavLink href="/signup" id="nav-text">
                Sign Up
            </NavLink>
            </div>
          </Navbar>
        </>
    )
}

export default Header 

