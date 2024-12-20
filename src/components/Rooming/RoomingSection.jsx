import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../Rooming/RoomingSection.css";

// Images
import bgImage from "../../assets/images/labs-image.jpg";
import roamingImage1 from "../../assets/images/roaming-image1.jpg";
import roamingImage2 from "../../assets/images/roaming-image2.jpg";
import roamingImage3 from "../../assets/images/roaming-image3.jpg";

const RoomingSection = () => {
  return (
    <Container className="top-pad" id="container" data-page="service" data-id="4969">
      {/* Location Cover */}
      <div className="location-cover full-height show">

        {/* Roaming Title on the Left */}
        <div className="roaming-title">
          <h1>Roaming</h1>
        </div>

        {/* ENROLL NOW! Card on the Right */}
        <div className="enroll-card">
          <div className="enroll-title">
            <h1 className="htdesk-enrollnow">ENROLL NOW!</h1>
            <p>
              Want to become a LABS member? Please select which building you’d like to be based at and fill in the form.
            </p>
          </div>
          <img
            src="https://labs.com/wp-content/themes/labs/images/arrow_symbol_hotdesk.svg"
            alt="Arrow Down SVG"
            className="svg-htdesk"
          />
          <div>
            <h6 className="lbl-htbuidling">Choose your home building?</h6>
            <Form.Select id="which-building" name="which_building">
              <option value="0">LABS House</option>
              <option value="1">LABS Hogarth House</option>
              <option value="2">LABS Atrium</option>
              <option value="3">LABS Hawley Lock</option>
              <option value="4">LABS 90 High Holborn</option>
              <option value="5">LABS Southampton Place</option>
            </Form.Select>
            <Button variant="primary" className="htdesk-regbutton" id="btn-hdcontinue">
              CONTINUE YOUR REGISTRATION
            </Button>
          </div>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="learn-more" id="learn-more">
        <i className="fa fa-chevron-down"></i>
        Learn more
      </div>

      {/* Service Section */}
      <div className="service-section wide and-narrow fadeInUp" id="service-section-1" style={{ background: "#ffffff" }}>
        <div className="inner-wrapper">
          <div className="the-text text-center">
            <h2>
              <strong>Embrace the freedom of flexible working</strong>
            </h2>
            <p>
              With a LABS Roaming membership comes access to our welcoming and comfortable central London
              workplaces that have been designed to give your business the flexibility and freedom to let you
              work in the best way for you.
            </p>
            <p>
              Encompassing elegant, yet cosy lounge areas, fully equipped kitchens, semi-private booths,
              functional communal coworking tables and more, the workplaces on offer with our Roaming membership
              allow you or your employees to pop into our offices and take up residence in a booth, at a table or
              sink into a sumptuous armchair for as long as you need.
            </p>
            <p>
              To further support your business our Roaming membership also provides you access to our range of
              exceptional facilities and services, including the onsite gyms, bike storage and secure high-speed
              wifi, all wrapped up in a sophisticated aesthetic and delivered by a team of experts, who are on hand
              to help with any query.
            </p>
            <p>
              Register through the form above or <a href="mailto:sales@labs.com">get in touch</a> if you need to
              find out more about how our roaming membership from £299 per month delivers more than your typical
              coworking space.
            </p>
          </div>
        </div>
      </div>

      {/* Child Services (Roaming Membership Options) */}
      <div className="child-services" id="child-services">
  <Row>
    <Col md={4}>
      <a href="https://labs.com/services/coworking/hot-desking-holborn/">
        <div className="item">
          <div
            className="image bg"
            style={{
              backgroundImage: `url(${roamingImage1})`,
              backgroundSize: "cover", // Ensures the image covers the div
              backgroundPosition: "center", // Centers the image in the div
              height: "250px", // Fixed height for image area
              borderRadius: "8px", // Optional: adds rounded corners to image
            }}
          ></div>
          <div className="overlay"></div>
          <div className="center-wrapper">
            <div className="center">
              <h4>
                Roaming Membership <br />
                <strong>in Holborn</strong>
              </h4>
              <Button variant="link" className="bright small m-t-10">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </a>
    </Col>
    <Col md={4}>
      <a href="https://labs.com/services/coworking/hot-desking-camden/">
        <div className="item">
          <div
            className="image bg"
            style={{
              backgroundImage: `url(${roamingImage2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px", // Same fixed height for consistency
              borderRadius: "8px", // Optional: rounded corners for image
            }}
          ></div>
          <div className="overlay"></div>
          <div className="center-wrapper">
            <div className="center">
              <h4>
                Roaming <br />
                <strong>in Camden</strong>
              </h4>
              <Button variant="link" className="bright small m-t-10">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </a>
    </Col>
    <Col md={4}>
      <a href="https://labs.com/services/coworking/hot-desking-london/">
        <div className="item">
          <div
            className="image bg"
            style={{
              backgroundImage: `url(${roamingImage3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px", // Same fixed height for consistency
              borderRadius: "8px", // Optional: rounded corners for image
            }}
          ></div>
          <div className="overlay"></div>
          <div className="center-wrapper">
            <div className="center">
              <h4>
                Roaming <br />
                <strong>in London</strong>
              </h4>
              <Button variant="link" className="bright small m-t-10">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </a>
    </Col>
  </Row>
</div>

      {/* Service Section 2 - Facilities & Benefits */}
      <div className="service-section wide and-narrow" id="service-section-2" style={{ background: "#f5f5f5" }}>
        <div className="inner-wrapper">
          <div className="the-text">
            <h2>
              <strong>Facilities, services and benefits</strong>
            </h2>
            <ul className="of-three">
              <li>Unlimited high-speed WiFi</li>
              <li>24hr Access</li>
              <li>Onsite Support teams</li>
              <li>Meeting Rooms</li>
              <li>Complimentary Tea & Coffee</li>
              <li>LABS Member App</li>
              <li>Exclusive Member Offers</li>
              <li>Fully Equipped Kitchens</li>
              <li>Onsite Gyms</li>
              <li>Shower Facilities</li>
              <li>Bike Storage</li>
              <li>Access to all LABS Locations</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomingSection;
