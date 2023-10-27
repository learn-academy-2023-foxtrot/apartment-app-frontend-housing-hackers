import React, { useState, useEffect } from "react"
import './App.css';
import Header from "./components/Header"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Footer from './components/Footer';
import NotFound from './pages/NotFound'
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"

function App() {
  const [user, setUser] = useState()
  console.log("user: ", user)

  const url = "http://localhost:3000"

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      localStorage.setItem("currentUser", JSON.stringify(payload))
      setUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }
  
  const signup = (userInfo) => {
    console.log("userInfo: ", userInfo)
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      localStorage.setItem("currentUser", JSON.stringify(payload))
      setUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }
  
  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      method: "DELETE"
    })
    .then(payload => {
      localStorage.removeItem("token")
      localStorage.removeItem("currentUser")
      setUser(null)
    })
    .catch(error => console.log("log out errors: ", error))
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aptindex" element={<ApartmentIndex />} />
        <Route path="/aptnew" element={<ApartmentNew />} />
        <Route path="/signin" element={<SignIn login={login}/>} />
        <Route path="/signup" element={<SignUp signup={signup}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

