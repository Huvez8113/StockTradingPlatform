import HomePage from "./landing_page/home/HomePage";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/signup/Login";
import API_BASE_URL from "./config";


function PrivateRoute({ children }) {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    axios.get(`${API_BASE_URL}/dashboard`, { withCredentials: true })
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);
  if (auth === null) return <h2>Loading...</h2>;
  return auth ? children : <Navigate to="/login" />;
}


function App() {

  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/pricing" element={<PricingPage/>} />
            <Route path="/support" element={<SupportPage/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
