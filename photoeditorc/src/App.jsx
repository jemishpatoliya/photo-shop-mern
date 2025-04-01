import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Features from "./pages/Features.jsx";
import Header from "./components/Header/Header.jsx";
import "./index.css";
import Contact from "./pages/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Crop from "./pages/Crop.jsx";
import Flip from "./pages/Flip.jsx";
import Tune from "./pages/Tune.jsx";
import Blur from "./pages/Blur.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/crop" element={<Crop />} />
        <Route path="/flip" element={<Flip />} />
        <Route path="/tune" element={<Tune />} />
        <Route path="/blur" element={<Blur />} />
        <Route path="/features" element={<Features />} />

        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
