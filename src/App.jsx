import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Topbar from "./components/TopBar/Topbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/AboutPage.jsx"; // Correct Import
import CounterSection from "./components/CounterSection/CounterSection.jsx";
import Services from "./components/Services/Services.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Reservation from "./components/Reservation/Reservation.jsx";
import ChefSection from "./components/ChefSection/ChefSection.jsx";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider.jsx";
import InstagramGallery from "./components/InstagramGallery/InstagramGallery.jsx";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/CounterSection" element={<CounterSection />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/ChefSection" element={<ChefSection />} />
        <Route path="/TestimonialSlider" element={<TestimonialSlider />} />
        <Route path="/InstagramGallery" element={<InstagramGallery />} />
      </Routes>
      <Footer />
      <Loader />
    </Router>
  );
}

export default App;
