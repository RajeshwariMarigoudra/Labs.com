import React from "react";
import "../TestimonialSlider/TestimonialSlider.css"; // Import custom styles
import "swiper/css"; // Import Swiper core styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Correct way to import Swiper modules

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      image: "src/assets/images/person_1.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Jason McClean",
      position: "Customer",
    },
    {
      id: 2,
      image: "src/assets/images/person_2.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Mark Stevenson",
      position: "Customer",
    },
    {
      id: 3,
      image: "src/assets/images/person_3.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Art Leonard",
      position: "Customer",
    },
    {
      id: 4,
      image: "src/assets/images/person_4.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Rose Henderson",
      position: "Customer",
    },
    {
      id: 5,
      image: "src/assets/images/person_3.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Ian Boner",
      position: "Customer",
    },
  ];

  return (
    <section
      className="ftco-section testimony-section img"
      style={{ backgroundImage: `url(src/assets/images/bg_5.jpg)` }}
    > 
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Happy Customer</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // Correct way to register modules
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimony-wrap text-center pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text p-3">
                      <p className="mb-4">{testimonial.text}</p>
                      <p className="name">{testimonial.name}</p>
                      <span className="position">{testimonial.position}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
