import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import Slider from "../../components/Slider/Slider";
import CounterSection from "../../components/CounterSection/CounterSection";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import Services from "../../components/Services/Services";
import ChefSection from "../../components/ChefSection/ChefSection";
import InstagramGallery from "../../components/InstagramGallery/InstagramGallery";
import Loader from "../../components/Loader/Loader";
import Menu from "../../components/Menu/Menu";
import Reservation from "../../components/Reservation/Reservation";

const HomePage = () => {
  return (
    <div>
      <h1>Hiie</h1>
      <Slider />
      <AboutSection />
      <CounterSection />
      <ChefSection />
      <Reservation />
      <Services />
      <Menu />
      <TestimonialSlider />
      <InstagramGallery />
      <Loader />
      
    </div>
  );
};

export default HomePage;
