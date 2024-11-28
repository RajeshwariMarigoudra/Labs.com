import React from "react";
import "../CoworkingSection/CoworkingSection.css"; // Import CSS for styling

// Import coworking images (use appropriate images related to coworking spaces)
import coworking1 from "../../assets/images/coworking-1.jpg";
import coworking2 from "../../assets/images/coworking-2.jpg";
import coworking3 from "../../assets/images/coworking-3.jpg";
import coworking4 from "../../assets/images/coworking-4.jpg";

const CoworkingSection = () => {
  const coworkingSpaces = [
    {
      id: 1,
      name: "Creative Space",
      location: "London, UK",
      image: coworking1,
      description:
        "A flexible workspace with creative energy. Perfect for startups, freelancers, and innovators.",
    },
    {
      id: 2,
      name: "Tech Hub",
      location: "New York, USA",
      image: coworking2,
      description:
        "A modern coworking space for tech companies, offering high-speed internet and collaborative areas.",
    },
    {
      id: 3,
      name: "Business Center",
      location: "Berlin, Germany",
      image: coworking3,
      description:
        "Premium coworking spaces with private offices and meeting rooms in a central business district.",
    },
    {
      id: 4,
      name: "Collaborative Workspace",
      location: "San Francisco, USA",
      image: coworking4,
      description:
        "An open and collaborative environment with flexible membership options and community events.",
    },
  ];

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Coworking Spaces</span>
            <h2 className="mb-4">Our Coworking Spaces</h2>
          </div>
        </div>
        <div className="row">
          {coworkingSpaces.map((space) => (
            <div key={space.id} className="col-md-6 col-lg-3 ftco-animate">
              <div className="workspace">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${space.image})`,
                  }}
                ></div>
                <div className="text pt-4">
                  <h3>{space.name}</h3>
                  <span className="location mb-2">{space.location}</span>
                  <p>{space.description}</p>
                  <div className="faded">
                    <ul className="ftco-social d-flex">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoworkingSection;
