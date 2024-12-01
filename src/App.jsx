import React, { useState } from "react";
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
import PrivateOffice from "./components/PrivateOffice/PrivateOffice.jsx";
import PortfolioItem from "./components/Portfolio/PortfolioItem.jsx";
import Enterprise from "./components/Enterprise/Enterprises.jsx";
import LabManaged from "./components/LabManaged/LabManaged.jsx";
import MeetingRooms from "./components/MeetingRooms/MeetingRooms.jsx";
import ContactPopup from "./components/ContactPopup/ContactPopup.jsx";

function App() {

  const [showContactModal, setShowContactModal] = useState(false); // State to control modal visibility

   // Show modal
   const handleShowModal = () => {
    setShowContactModal(true);
  };
    // Close modal
    const handleCloseModal = () => {
      setShowContactModal(false);
    };
  

  return (
    <Router>
      <Topbar />
      <Navbar handleShowModal={handleShowModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booktourform" element={<BookingTour />} />
        <Route path="/CounterSection" element={<CounterSection />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/services/roaming" element={<RoomingSection />} />
        <Route path="/services/privateoffice" element={<PrivateOffice />} />
        <Route path="/services/enterprise" element={<Enterprise />} />
        <Route path="/services/labmanaged" element={<LabManaged />} />
        <Route path="/services/meetingrooms" element={<MeetingRooms />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/CoworkingSection" element={<CoworkingSection />} />
        <Route path="/LocationSlider" element={<LocationSlider />} />
        <Route path="/portfolio" element={<PortfolioItem />} />
         {/* Contact Modal */}
      </Routes>
      <Footer />
      <Loader />
      <ContactPopup show={showContactModal} handleClose={handleCloseModal} />
    </Router>
  );
}

export default App;
