import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import Slider from "../../components/Slider/Slider";
import CounterSection from "../../components/CounterSection/CounterSection";
import Loader from "../../components/Loader/Loader";
import BookingTour from "../../components/BookTourForm/BookingTour";
import AboutLabs from "../About/AboutLab";
import LocationSlider from "../../components/LocationSlider/LocationSlider";
import ServicePage from "../../components/Services/ServicePage";
import CoworkingSection from "../../components/CoworkingSection/CoworkingSection";
import PortfolioItem from "../../components/Portfolio/PortfolioItem";

const HomePage = () => {
  return (
    <div>
      {/* <h1>Hiie</h1> */}
      <Slider />
      <AboutLabs/>
      <CoworkingSection />
      <AboutSection />
      <BookingTour/>
      <CounterSection />         
      <LocationSlider />
      <ServicePage />  
      <Loader />
    </div>
  );
};

export default HomePage;
