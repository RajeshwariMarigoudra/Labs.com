import React from "react";
import "../ChefSection/ChefSection.css"; // Import CSS for styling

// Import Chef Images
import chef1 from "../../assets/images/chef-1.jpg";
import chef2 from "../../assets/images/chef-2.jpg";
import chef3 from "../../assets/images/chef-3.jpg";
import chef4 from "../../assets/images/chef-4.jpg";

const ChefSection = () => {
  const chefs = [
    {
      id: 1,
      name: "John Smooth",
      position: "Restaurant Owner",
      image: chef4,
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 2,
      name: "Rebeca Welson",
      position: "Head Chef",
      image: chef2,
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 3,
      name: "Kharl Branyt",
      position: "Chef",
      image: chef3,
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 4,
      name: "Luke Simon",
      position: "Chef",
      image: chef1,
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Chef</span>
            <h2 className="mb-4">Our Master Chef</h2>
          </div>
        </div>
        <div className="row">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="col-md-6 col-lg-3 ftco-animate"
            >
              <div className="staff">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${chef.image})`,
                  }}
                ></div>
                <div className="text pt-4">
                  <h3>{chef.name}</h3>
                  <span className="position mb-2">{chef.position}</span>
                  <p>{chef.description}</p>
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

export default ChefSection;
