import React from "react";
import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // For navigation arrows
import "swiper/css/pagination"; // For pagination bullets
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../Slider/Slider.css"; // Custom styles for the slider
import coworking1 from "../../assets/images/image_1.jpg";
import coworking2 from "../../assets/images/image_6.jpg";

const Slider = () => {
  return (
    <section className="home-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Using modules for navigation, pagination, and autoplay
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }} // Auto slide every 4 seconds
        loop={true} // Enable loop for continuous sliding
      >
        {/* Image Slide 1 */}
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={coworking1} // Replace with your image URL
              alt="Slide 1"
            />
            <div className="overlay"></div>
            <div className="slider-text">
              <h2>Flexible Workspaces in London</h2>
              <p>Experience the future of coworking with premium spaces and modern amenities.</p>
              <a href="https://dxminds.com/contact-us/" className="book-tour-btn">Book a Tour</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Image Slide 2 */}
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={coworking2} // Replace with your image URL
              alt="Slide 2"
            />
            <div className="overlay"></div>
            <div className="slider-text">
              <h2>Join the Innovation Hub</h2>
              <p>Collaborate, network, and grow your business in our state-of-the-art spaces.</p>
              <a href="https://dxminds.com/contact-us/" className="book-tour-btn">Book a Tour</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more SwiperSlide elements as needed */}
      </Swiper>
    </section>
  );
};

export default Slider;
