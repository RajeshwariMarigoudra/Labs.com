import React from "react";
import "../Services/Services.css"; // Import custom styles

const Services = () => {
  const servicesData = [
    {
      id: 1,
      iconClass: "flaticon-cake",
      title: "Birthday Party",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      id: 2,
      iconClass: "flaticon-meeting",
      title: "Business Meetings",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      id: 3,
      iconClass: "flaticon-tray",
      title: "Wedding Party",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
  ];

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Services</span>
            <h2 className="mb-4">Catering Services</h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="col-md-4 d-flex align-self-stretch text-center"
            >
              <div className="media block-6 services d-block">
                {/* Service Icon */}
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className={service.iconClass}></span>
                </div>
                {/* Service Content */}
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
