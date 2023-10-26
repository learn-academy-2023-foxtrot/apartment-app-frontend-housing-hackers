import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
          <Navbar color="black" dark>
            <NavbarBrand href="/" id="title">
              Twilight Towers
            </NavbarBrand>
            <div className="text-container">
              <NavLink to={/aptindex/} id="nav-text">
                View Apartments
              </NavLink>
              <NavLink to={/aptnew/} id="nav-text">
                Add Apartments 
              </NavLink>
              <NavLink to={/signin/} id="nav-text">
                Sign In
            </NavLink>
            <NavLink to={/signup/} id="nav-text">
                Sign Up
            </NavLink>
            </div>
          </Navbar>
        </>
    )
}

export default Header 

