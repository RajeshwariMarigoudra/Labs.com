import React from 'react'; 
import { Button } from 'react-bootstrap'; // Importing Button from Bootstrap
import '../Services/ServicePage.CSS'; // Import the CSS file

const ServicePage = () => {
  return (
    <div className="container top-pad" id="container" data-page="service" data-id="7034">
      
      {/* Hero Section with Image */}
      <div className="location-cover">
        <div className="image">
          <div className="overlay"></div> {/* Overlay on top of the image */}
        </div>
        <div className="inner-wrapper text-center">
          <h1 className="display-4 text-white">LABS Daily</h1>
          <p className="lead text-white">Flexible Workspaces for Your Team</p>
        </div>
      </div>

      {/* Service Section 1 */}
      <div className="service-section wide and-narrow fadeInUp" id="service-section-1">
        <div className="inner-wrapper">
          <div className="the-text">
            <h3 className="fw-light">
              <strong>Spend the day at LABS from just £45</strong>
            </h3>
            <p className="fw-light">
              If you’re looking for a break from your kitchen table or to reunite your team in a safe environment, we offer a variety of options allowing you to make use of LABS workspaces without the long-term commitment.
            </p>
            <p className="fw-light">
              Our buildings offer in-house amenities including tech-savvy meeting rooms, fully equipped gyms complete with showers, secure bike storage, and spacious breakout lounges and kitchens. Our central locations are easily accessible on foot, by train, bus, or on two wheels and are surrounded by a wealth of local restaurants, shops, and lifestyle services.
            </p>

            <h3 className="fw-light">
              <strong>Day pass</strong>
            </h3>
            <p className="fw-light">
              If you’re looking for a change of scenery but don’t require a fully private space, a LABS Day Pass offers access to our beautifully designed breakout lounges as well as the use of some building facilities. Break up your week and spend some time at LABS for just £45 +VAT per day. Once purchased, a LABS Day Pass can be used on any weekday, simply arrive at the building selected and we’ll issue your access pass.
            </p>

            <h3 className="fw-light">
              <strong>Meeting Rooms</strong>
            </h3>
            <p className="fw-light">
              LABS meeting rooms provide a hub for uninterrupted productivity and offer enhanced technology to facilitate meetings with both remote participants as well as those present. With a variety of meeting room sizes available, they provide a private space to bring your team together.
            </p>
            <p className="fw-light">
              If you’re looking for a longer-term solution, we have flexible contracts available. Contact our sales team at 020 3761 2800 or <a href="mailto:sales@labs.com">sales@labs.com</a> to find out more.
            </p>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <Button
                variant="primary"
                onClick={() => (window.location.href = '/services/labs-daily/day-pass/')}
              >
                BUY A DAY PASS
              </Button>
              <Button
                variant="primary"
                onClick={() => (window.location.href = '/services/meeting-rooms/')}
              >
                BOOK A MEETING ROOM
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section 2 */}
      <div className="service-section wide and-narrow wow fadeInUp" id="service-section-2">
        <div className="inner-wrapper even">
          <div className="the-text">
            <h2 id="facilitiesandservices">Facilities and services</h2>
            <h6>Business benefits:</h6>
            <ul className="list-unstyled">
              <li>Printing and photocopying</li>
              <li>Spaces designed to brief featuring the LABS design signature</li>
              <li>Access to selected LABS buildings across two campuses</li>
              <li>Unlimited high-speed WiFi</li>
              <li>Support staff including IT, cleaning, security, and maintenance</li>
              <li>Meeting rooms and event spaces available</li>
            </ul>

            <h6>Member perks:</h6>
            <ul className="list-unstyled">
              <li>Spacious floors and breakout areas for communal co-working</li>
              <li>Exclusive member perks and discounts</li>
              <li>Membership to the LABS Collective, a network of coworkers</li>
              <li>Pets allowed</li>
              <li>Air conditioning</li>
              <li>Disabled access</li>
              <li>LABS Community app</li>
              <li>Changing rooms with showers</li>
              <li>Secure bike storage</li>
              <li>Free tea, coffee, biscuits, and fruit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
