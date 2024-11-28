import React from 'react';
import "../LocationSlider/LocationSlider.css"; // Import custom styles
import "swiper/css"; // Import Swiper core styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules

const LocationSlider = () => {
  const locations = [
    {
      id: 1,
      image: "https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2017/05/15090309/Labs_Holborn-House_01_v6-1024x640.webp",
      name: "LABS House",
      location: "London",
      link: "https://labs.com/location/labs-house/"
    },
    {
      id: 2,
      image: "https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08133134/LABS_Southampton-Place_Meeting-room_Study_3-1024x684.webp",
      name: "LABS Southampton Place",
      location: "London",
      link: "https://labs.com/location/southampton-place-london/"
    },
    // Add more location objects as needed
  ];

  return (
    <section className="location-slider">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Our Locations</span>
            <h2 className="mb-4">Explore Our Workspaces</h2>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Register modules
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {locations.map((location) => (
            <SwiperSlide key={location.id}>
              <a href={location.link} className="location-slide">
                <div className="item">
                  <div
                    className="image bg"
                    style={{ background: `url(${location.image}) no-repeat center center / cover` }}
                  ></div>
                  <div className="diagonal"></div>
                  <div className="center-wrapper">
                    <div className="center">
                      <h3>
                        {location.location} <br />
                        <strong>{location.name}</strong>
                      </h3>
                      <div className="button bright mt-3">
                        Find Out More
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LocationSlider;
