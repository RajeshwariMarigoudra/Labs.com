import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Topbar from "./components/TopBar/Topbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/AboutPage.jsx"; // Correct Import
import CounterSection from "./components/CounterSection/CounterSection.jsx";
import Services from "./components/Services/ServicePage.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Reservation from "./components/Reservation/Reservation.jsx";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader.jsx";
import BookingTour from "./components/BookTourForm/BookingTour.jsx";
import LocationSlider from "./components/LocationSlider/LocationSlider.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import CoworkingSection from "./components/CoworkingSection/CoworkingSection.jsx";
import RoomingSection from "./components/Rooming/RoomingSection.jsx";

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booktourform" element={<BookingTour />} />
        <Route path="/CounterSection" element={<CounterSection />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/services/roaming" element={<RoomingSection />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/CoworkingSection" element={<CoworkingSection />} />
        <Route path="/LocationSlider" element={<LocationSlider />} />
      </Routes>
      <Footer />
      <Loader />
    </Router>
  );
}

export default App;
