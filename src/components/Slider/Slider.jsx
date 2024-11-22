import React from "react";
import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // For navigation arrows
import "swiper/css/pagination"; // For pagination bullets
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../Slider/Slider.css"; // Custom styles for slider

const Slider = () => {
  // Slider data (you can make this dynamic if needed)
  const slides = [
    {
      id: 1,
      backgroundImage: "src/assets/images/bg_1.jpg",
      title: "Our Delicious Specialties",
      buttons: [
        { text: "Order Now", link: "#", className: "btn btn-primary p-3 px-xl-4 py-xl-3" },
        { text: "View Menu", link: "#", className: "btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3" },
      ],
    },
    {
      id: 2,
      backgroundImage: "src/assets/images/bg_2.jpg",
      title: "The Best Place to Kick of Your Day",
      buttons: [
        { text: "Order Now", link: "#", className: "btn btn-primary p-3 px-xl-4 py-xl-3" },
        { text: "View Menu", link: "#", className: "btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3" },
      ],
    },
    {
      id: 3,
      backgroundImage: "src/assets/images/bg_3.jpg",
      title: "Creamy Hot and Ready to Serve",
      buttons: [
        { text: "Order Now", link: "#", className: "btn btn-primary p-3 px-xl-4 py-xl-3" },
        { text: "View Menu", link: "#", className: "btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3" },
      ],
    },
  ];

  return (
    <section className="home-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Enable required modules
        spaceBetween={0}
        slidesPerView={1}
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination bullets
        autoplay={{ delay: 5000 }} // Enable autoplay
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slider-item js-fullheight"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="overlay"></div>
              <div className="container">
                <div className="row slider-text js-fullheight justify-content-center align-items-center">
                  <div className="col-md-12 col-sm-12 text-center">
                    <h1 className="mb-4 mt-5">{slide.title}</h1>
                    <p>
                      {slide.buttons.map((button, index) => (
                        <a href={button.link} className={button.className} key={index}>
                          {button.text}
                        </a>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
