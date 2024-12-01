import React, { useState } from 'react';
import './MeetingRooms.css';
import { Button, Form } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

const MeetingRooms = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('LABS Atrium');

  const handleBuildingChange = (e) => {
    setSelectedBuilding(e.target.value);
  };

  const handleBooking = () => {
    alert(`You have selected: ${selectedBuilding}`);
  };

  return (
    <div className="container top-pad" id="container" data-page="service" data-id="4890">
      {/* Location Cover */}
      <div className="location-cover full-height show">
        <div
          className="location-cover-gallery slick-initialized slick-slider"
          id="location-cover-gallery"
        >
          <div aria-live="polite" className="slick-list draggable">
            <div
              className="slick-track"
              style={{ opacity: 1, width: '5984px' }}
              role="listbox"
            >
              <div
                className="item slick-slide slick-current slick-active"
                style={{
                  width: '5984px',
                  position: 'relative',
                  left: '0px',
                  top: '0px',
                  zIndex: 999,
                  opacity: 1,
                }}
                aria-hidden="false"
                role="option"
              >
                <div
                  className="image bg"
                  style={{
                    background:
                      'url(https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/05/12084213/LABS_March-21_4th-Floor_09.jpg)',
                  }}
                >
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-wrapper open-gallery">
          <div className="center-wrapper of-soon show">
            <div className="center">
              <h1>MEETING ROOMS</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="learn-more" id="learn-more">
        <FaChevronDown /> Learn more
      </div>

      {/* Leads Form Section */}
      <div className="leads-form narrow fadeInUp coworking-con" id="leads-form-b">
        <div className="form-locations-outer">
          <div className="form-the-title text-center">
            <div className="enroll-sec">
              <div className="enroll-title">
                <h1 className="htdesk-enrollnow">LABS MEETING ROOMS</h1>
                <p>
                  To book a meeting room, please select the building you’d like to check for a room.
                </p>
              </div>
              <img
                src="https://labs.com/wp-content/themes/labs/images/arrow_symbol_hotdesk.svg"
                alt="Arrow Down SVG"
                className="svg-htdesk d-none"
              />
              <div>
                <h6 className="lbl-htbuidling d-none">Choose your home building?</h6>
                <br />
                <br />
                <div id="container-hotdesk">
                  <Form.Group controlId="which-building-meetingroom">
                    <Form.Control
                      as="select"
                      value={selectedBuilding}
                      onChange={handleBuildingChange}
                    >
                      <option disabled>Camden Campus</option>
                      <option>LABS Atrium</option>
                      <option>LABS Triangle</option>
                      <option>LABS Lockside</option>
                      <option>LABS Hawley Lock</option>
                      <option disabled>Holborn Campus</option>
                      <option>LABS 90 High Holborn</option>
                      <option>LABS House</option>
                      <option>LABS Hogarth House</option>
                      <option>LABS Southampton Place</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <br />
                <br />
                <Button
                  className="htdesk-regbutton"
                  onClick={handleBooking}
                >
                  BOOK YOUR MEETING ROOM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sections-wrapper" style={{ overflow: "hidden" }} id="meeting-room-wrapper">
      <div className="service-section wide and-narrow fadeInUp" style={{ paddingTop: 0 }}>
        <div className="inner-wrapper no-pad-left">
          <div className="section">
            <h2 className="ta-c">
              <strong>CENTRAL LONDON MEETING ROOMS</strong>
            </h2>
            <h5 className="ta-c m-t-10">
              Workshops, off-sites, creative away days, conferences and more…<br />
              <strong>No matter what your meeting room requirements, we have a space you’ll love.</strong>
            </h5>
          </div>
          <div className="meetings-video-text m-t-30 d-none">
            <div className="vimeo-wrapper">
              <div className="inner-wrapper">
                <iframe
                  className="optanon-category-C0004 ot-vscat-C0004 optanon-category-004"
                  frameBorder="0"
                  allowFullScreen
                  data-src="https://www.youtube.com/embed/MoAILxshXZQ?rel=0&amp;showinfo=0&amp;autoplay=0"
                />
              </div>
            </div>
            <div className="text">
              <h5>AV that’s both sophisticated and simple to use? Absolutely.</h5>
              <h5 className="m-t-10">Catering and all kinds of drinks? Consider it done.</h5>
              <p className="desc m-t-10">
                Our central London meeting rooms are designed to inspire, accommodate and facilitate your best work.
              </p>
              <p className="desc m-t-10">
                We’ve expertly put together beautiful design, environments engineered for productivity, and top
                technology, so all you need to do is choose your meeting room and leave the rest to us!
              </p>
              <p className="m-t-10">
                Plus, 4-person rooms start at just
                <br />
                £30 per hour.
              </p>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>

      <div className="service-section wide and-narrow" style={{ background: "#f5f5f5" }}>
        <div className="inner-wrapper no-pad-left">
          <h2 className="ta-c m-t-60">
            <strong>OUR MEETING ROOMS INCLUDE:</strong>
          </h2>
          <div className="section two m-t-20">
            <div className="part reg five-points">
              <div className="point">
                <i className="fa fa-video-camera" aria-hidden="true"></i>
                <p>Video conferencing via personal laptop (Skype, Google Hangouts etc.)</p>
              </div>
              <div className="point">
                <i className="fa fa-volume-up" aria-hidden="true"></i>
                <p>Audio conferencing with expert acoustics</p>
              </div>
              <div className="point">
                <i className="fa fa-desktop" aria-hidden="true"></i>
                <p>Wireless presentations</p>
              </div>
              <div className="point">
                <i className="fa fa-wifi" aria-hidden="true"></i>
                <p>Fast WiFi</p>
              </div>
              <div className="clear"></div>
            </div>
            <div className="part reg five-points">
              <div className="point">
                <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                <p>Air conditioning and temperature control</p>
              </div>
              <div className="point">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                <p>Whiteboard walls for brainstorming</p>
              </div>
              <div className="point">
                <i className="fa fa-cutlery" aria-hidden="true"></i>
                <p>Water and catering options to suit your budget</p>
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>

      <div className="service-section wide and-narrow" style={{ background: "#ffffff", marginBottom: "-20px" }}>
        <div className="inner-wrapper no-pad-left gallery-container">
          <div data-wow-delay=".4s" id="meeting-room-gallery" style={{ marginBottom: "-10px" }} className="slick-initialized slick-slider">
            {/* Add your images inside the slider */}
            <button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" role="button">
              Previous
            </button>
            <div className="slick-list draggable">
              <div className="slick-track">
                {/* Replace the below image tags with dynamic content if necessary */}
                <div className="item slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: "900px" }}>
                  <img
                    src="https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/07/05145003/LABS_Triangle_Meeting-Room_Yard.jpg"
                    className="img-responsive"
                    alt="Meeting Room"
                  />
                </div>
                {/* Add more images here */}
              </div>
            </div>
            <button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="service-section wide and-narrow custom-meeting-room" style={{ background: "#ffffff", paddingTop: "0px" }}>
        <div className="inner-wrapper no-pad-left">
          <h2 className="ta-c d-none">
            <strong>Meeting Rooms for hire</strong>
          </h2>
          <p>
            At LABS we believe that meetings should be more engaging and productive. That’s why we have a wide variety of
            private meeting rooms for hire, all equipped with world-class facilities.
          </p>
          {/* Add more paragraphs */}
          <div className="ta-c m-t-50">
            <div className="button warm middle meetings-go-up">Book a meeting room</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MeetingRooms;
