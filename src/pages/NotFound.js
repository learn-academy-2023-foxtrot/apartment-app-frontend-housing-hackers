import React from "react"
import notfound from "../assets/404error.jpeg"

const NotFound = () => {
    return (
        <>
        <img src={notfound} alt="404 image" className= "error"></img>
        </>
    )
}

export default NotFound