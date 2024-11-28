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

const HomePage = () => {
  return (
    <div>
      {/* <h1>Hiie</h1> */}
      <Slider />
      <CoworkingSection />
      <AboutSection />
      <BookingTour/>
      <CounterSection />
      <ServicePage />
      <AboutLabs/>
      <LocationSlider />
      <Loader />
      
    </div>
  );
};

export default HomePage;
