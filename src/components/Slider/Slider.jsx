import React from "react";
import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // For navigation arrows
import "swiper/css/pagination"; // For pagination bullets
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../Slider/Slider.css"; // Custom styles for the slider

const Slider = () => {
  return (
    <section className="home-slider">
      <div className="overlay"></div>
      {/* Content Section (Heading + Button) */}
      <div className="slider-text">
        <h1>Empower Your Business with Generative AI, Cutting-Edge Apps, and Next-Gen Tech Solutions</h1>
        <p>Unlock New Business Horizons with Industry-Leading Expertise.</p>
        <a href="https://dxminds.com/contact-us/" className="elementor-button">
          CONNECT WITH US
        </a>
      </div>
    </section>
  );
};

export default Slider;
