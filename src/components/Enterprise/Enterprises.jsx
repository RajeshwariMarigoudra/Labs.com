import React from 'react';
import './Enterprise.css'; // Import the CSS file for styling

const Enterprise = () => {
  return (
    <div className="container top-pad" id="container" data-page="service" data-id="5976">
      <div className="location-cover full-height show">
        <div className="location-cover-gallery">
          <div
            className="image bg"
            style={{
              background: 'url(https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2023/01/31071137/LABS_Dockray-Place-v2_16.jpg)',
            }}
          >
            <div className="overlay"></div>
          </div>
        </div>
        <div className="inner-wrapper">
          <div className="center-wrapper of-soon show">
            <div className="center">
              <h1>
                Enterprise
                <br />
                <strong></strong>
              </h1>
            </div>
          </div>
        </div>

        <div className="mobile__container">
          <div className="box__bookContainer">
            <h4 className="txt__address">Enterprise</h4>
            <button className="btnBookTour">BOOK A TOUR</button>
            <p className="txt__getTouch">
              Get in touch: <a href="mailto:sales@labs.com"><span>sales@labs.com</span></a> or call{' '}
              <a href="tel:02037612800"><span>0203 761 2800</span></a>
            </p>
          </div>
        </div>

        <div className="learn-more" id="learn-more">
          <i className="fa fa-chevron-down"></i>
          Learn more
        </div>
      </div>

      <div
        className="service-section wide and-narrow fadeInUp"
        id="service-section-1"
        style={{ background: '#ffffff' }}
      >
        <div className="inner-wrapper">
          <div className="the-text">
            <h2 style={{ textAlign: 'center' }}>
              <strong>Workspace designed to suit your business</strong>
            </h2>
            <p style={{ textAlign: 'center' }}>
              For those businesses that want sole occupancy of a space, but also desire the benefits of being within a LABS workplace, our Enterprise offering is the ideal solution.
            </p>
            <p style={{ textAlign: 'center' }}>
              Our expert teams can work with you to understand your business’s needs and help bring your central London office vision to life, ensuring it’s designed to contribute to the ongoing success of your business.
            </p>
            <p style={{ textAlign: 'center' }}>
              We can design, build and operate a bespoke suite, whole floor or multiple floors within one of our central London offices for you. Expertly creating spaces that can include a new reception, meeting rooms, break-out spaces to promote collaboration and connections or quiet zones for focused working, phone booths, kitchens, and more, exclusively for your use.
            </p>
            <p style={{ textAlign: 'center' }}>
              This all-inclusive service can also encompass all of the expenses incurred by an office, such as dedicated IT solutions, ergonomic furniture, utility bills, cleaning, security and maintenance, to name a few, all covered by one monthly fee. We can run your office, so you can concentrate on running your business.
            </p>
            <p style={{ textAlign: 'center' }}>
              Your business will also enjoy the advantages of being within LABS’ network with access to the range of amenities we provide across our buildings, including onsite gyms, cafes and bars, as well as invites to our events and range of exclusive member offers, bringing you much more than a typical serviced office in London.
            </p>
            <p style={{ textAlign: 'center' }}>
              Our Enterprise offering is perfect for businesses who require office space for from 50 people up to 5,000. Book a tour via the form or if you need more information please{' '}
              <a href="mailto:sales@labs.com">contact our team</a> to discuss further.
            </p>
          </div>
        </div>
      </div>

      <div
        className="service-section wide and-narrow wow fadeInUp"
        id="service-section-2"
        style={{ background: '#f5f5f5' }}
      >
        <div className="inner-wrapper even">
          <div className="the-text">
            <h2>
              <strong>Key Facilities & services</strong>
            </h2>
            <ul className="of-three">
              <li>Unlimited High Speed WiFi</li>
              <li>Secure & Private Network</li>
              <li>IT Support</li>
              <li>Cleaning & Maintenance</li>
              <li>Security</li>
              <li>24hr Access</li>
              <li>Printing & Photocopying Facilities</li>
              <li>Complimentary Tea & Coffee</li>
              <li>LABS Member App</li>
              <li>Access to LABS Events & Classes</li>
              <li>Onsite Gyms</li>
              <li>Complimentary Fruit & Biscuits</li>
              <li>Onsite showers</li>
              <li>Bike Storage</li>
              <li>Onsite Cafés & Bars</li>
              <li>Airconditioning</li>
              <li>Pets Allowed</li>
              <li>Bookable Event Spaces</li>
              <li>Meeting Rooms with Optional Catering</li>
              <li>Spaces Designed to Your Business Needs</li>
              <li>Access to Communal Areas Within Other LABS Workplaces</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="related-services wow fadeInUp" id="related-services">
        <a href="/services/serviced-offices/">
          <div className="item">
            <div
              className="image bg"
              style={{
                background: 'url(https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2021/12/03160651/LABS-Camden-Dockray-Place2.jpg)',
              }}
            ></div>
            <div className="overlay"></div>
            <div className="center-wrapper">
              <div className="center">
                <h4>
                  Serviced
                  <br />
                  <strong>Office</strong>
                </h4>
              </div>
            </div>
          </div>
        </a>
        <a href="/services/coworking/">
          <div className="item">
            <div
              className="image bg"
              style={{
                background: 'url(https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/06/21092821/LABS-6203-Edit_01.jpg)',
              }}
            ></div>
            <div className="overlay"></div>
            <div className="center-wrapper">
              <div className="center">
                <h4>
                  Hot
                  <br />
                  <strong>Desking</strong>
                </h4>
              </div>
            </div>
          </div>
        </a>
        <a href="/services/meeting-rooms/">
          <div className="item">
            <div
              className="image bg"
              style={{
                background: 'url(https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2017/05/15091331/LABS_July-2022_08.jpg)',
              }}
            ></div>
            <div className="overlay"></div>
            <div className="center-wrapper">
              <div className="center">
                <h4>
                  Meeting
                  <br />
                  <strong>Rooms</strong>
                </h4>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Enterprise;
