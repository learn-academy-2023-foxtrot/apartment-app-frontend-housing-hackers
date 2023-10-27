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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aptindex" element={<ApartmentIndex />} />
        <Route path="/aptnew" element={<ApartmentNew />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
