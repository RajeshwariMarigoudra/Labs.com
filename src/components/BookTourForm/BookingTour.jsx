import React, { useState } from "react";
import "./BookingTour.css";  // Adjust path as needed

const BookingTour = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    tour_fullname: "",
    tour_company: "",
    tour_phone: "",
    tour_email: "",
    tour_location: "LABS House",
    tour_service: "Roaming",
    tour_teamsize: "",
    tour_updates_agreement: false,
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic, like an API call
    console.log("Tour booked with data:", formData);
  };

  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb center-content">
      <div className="container-fluid px-0 center-content">
        <div className="row d-flex no-gutters center-content">
          {/* Booking Tour Form */}
          <div className="col-md-6 ftco-animate makereservation p-4 p-md-5 pt-5 pt-md-0">
            <div className="heading-section ftco-animate mb-5">
              <span className="subheading">Book a Tour</span>
              <h2 className="mb-4">Make a Reservation</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Full Name */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="tour_fullname"
                      className="form-control"
                      placeholder="Your full name"
                      value={formData.tour_fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="tour_company"
                      className="form-control"
                      placeholder="Your company name"
                      value={formData.tour_company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="tour_phone"
                      className="form-control"
                      placeholder="Your phone number"
                      value={formData.tour_phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="tour_email"
                      className="form-control"
                      placeholder="Your email address"
                      value={formData.tour_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Location</label>
                    <select
                      name="tour_location"
                      className="form-control"
                      value={formData.tour_location}
                      onChange={handleChange}
                    >
                      <option value="High Holborn">LABS 90 High Holborn</option>
                      <option value="Southampton Place">LABS Southampton Place</option>
                      <option value="Victoria House">LABS Victoria House</option>
                      <option value="Hogarth House">LABS Hogarth House</option>
                      <option value="LABS House">LABS House</option>
                      <option value="Atrium">LABS Atrium</option>
                      <option value="Dockray Place">LABS Dockray Place</option>
                      <option value="LABS Hawley Lock">LABS Hawley Lock</option>
                      <option value="Lockside">LABS Lockside</option>
                      <option value="Triangle">LABS Triangle</option>
                      <option value="Nicosia Cyprus">Nicosia Cyprus</option>
                    </select>
                  </div>
                </div>

                {/* Interested In */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Interested In</label>
                    <select
                      name="tour_service"
                      className="form-control"
                      value={formData.tour_service}
                      onChange={handleChange}
                    >
                      <option value="1">Roaming</option>
                      <option value="2">Private</option>
                      <option value="5">Enterprise</option>
                      <option value="4">Meeting Rooms</option>
                      <option value="3">Event Space</option>
                    </select>
                  </div>
                </div>

                {/* Team Size */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Team Size</label>
                    <input
                      type="number"
                      name="tour_teamsize"
                      className="form-control"
                      placeholder="Number of people"
                      value={formData.tour_teamsize}
                      onChange={handleChange}
                      required
                      max="3"
                    />
                  </div>
                </div>

                {/* Updates Agreement */}
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="tour_updates_agreement"
                      checked={formData.tour_updates_agreement}
                      onChange={handleChange}
                    />
                    <label className="ml-2">
                      Yes, I would like to receive updates regarding special offers, events, and promotions.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Make a Reservation"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Map Section */}
          {/* <div className="col-md-6 d-flex align-items-stretch pb-5 pb-md-0">
            <div id="map" className="map-container">
              You can integrate Google Maps here if required
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BookingTour;
