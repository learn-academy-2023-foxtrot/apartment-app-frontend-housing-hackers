import React from "react"
import logo from "../assets/apartmentlogo.png"

const Home = () => {
    return (
      <>
        <div className= "homecontainer"> 
          <h2 className= "introtext" >Find your new apartment here at Twilight Towers!</h2>
          <img src={logo} alt="logo for website" id="apartment-logo"></img>
        </div> 
      </>
    )
}

export default Home