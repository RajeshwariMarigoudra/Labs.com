import React from "react";
import "../AboutSection/AboutSection.css"; // Import custom styles
import BookTourForm from "../BookTourForm/BookingTour";

const AboutSection = () => {
  
  return (
    <section className="ftco-section ftco-wrap-about ftco-no-pb">
     <div className="row justify-content-center align-items-center">
  <div className="col-md-6">
    <h2 className="mb-4">LABS DAILY</h2>
    <p>
      LABS DAILY
      <br />
      Spend the day at LABS from just £45
      <br />
      A LABS Day Pass enables you to spend a day within one of our beautifully designed workplaces where the communal areas are more than just hot desks in coworking spaces, and you get to enjoy all the other amenities your chosen building has to offer.
    </p>
  </div>

  <div className="col-md-6">
    <img
      src="https://www.mynewlab.com/wp-content/uploads/2018/04/iStock-490525207.jpg"
      alt="Stock Image"
      className="img-fluid" // Ensures the image is responsive
    />
  </div>
  <div className="row justify-content-center align-items-center">
  {/* Image on the left */}
  <div className="col-md-6 order-md-1">
    <img
      src="https://www.mynewlab.com/wp-content/uploads/2018/04/iStock-490525207.jpg"
      alt="Stock Image"
      className="img-fluid" // Ensures the image is responsive
    />
  </div>
  
  {/* Content on the right */}
  <div className="col-md-6 order-md-2">
    <h2 className="mb-4">JOIN LABS</h2>
    <p>
    JOIN LABS
      <br />
      Become a Roaming Member Our stylish communal,
      <br />
      
 coworking areas within LABS are also accessible through our Roaming Membership allowing you to pop in and occupy a spot at an open-plan desk or cosy up on a plush sofa.
    </p>
  </div>
</div>
<div className="col-md-6">
    <h2 className="mb-4">ABOUT LABS</h2>
    <p>
    We run the office so you can run your organisation
      <br />
      Spend the day at LABS from just £45
      <br />
      LABS delivers customisable workspaces designed for people to innovate, connect and thrive. LABS supports companies of all sizes, from ambitious individuals looking for coworking through to established corporations. We are not your typical serviced office provider, we offer a unique workplace tailored to suit any business’s needs.
    </p>
  </div>

  <div className="col-md-6">
    <img
      src="https://www.mynewlab.com/wp-content/uploads/2018/04/iStock-490525207.jpg"
      alt="Stock Image"
      className="img-fluid" // Ensures the image is responsive
    />
  </div>
</div>


      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 wrap-about ftco-animate text-center">
            <div className="heading-section mb-4 text-center">
              <span className="subheading">
              ABOUT LABS</span>
              <h2 className="mb-4">Appetizer Restaurant</h2>
            </div>
            
            <p>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>

            <div className="video justify-content-center">
              <a
                href="https://vimeo.com/45830194"
                className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ion-ios-play"></span>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutSection;
