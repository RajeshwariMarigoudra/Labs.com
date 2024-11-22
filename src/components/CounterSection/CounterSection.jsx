import React from "react";
import "../CounterSection/CounterSection.css"; // Import custom styles

const CounterSection = () => {
  const counters = [
    {
      id: 1,
      number: 18,
      label: "Years of Experience",
    },
    {
      id: 2,
      number: 15000,
      label: "Happy Customers",
    },
    {
      id: 3,
      number: 100,
      label: "Menus",
    },
    {
      id: 4,
      number: 20,
      label: "Staffs",
    },
  ];

  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: `url(src/assets/images/bg_4.jpg)` }}
    >
      <div className="container">
        <div className="row d-md-flex align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="row d-md-flex align-items-center">
              {counters.map((counter) => (
                <div
                  key={counter.id}
                  className="col-md d-flex justify-content-center counter-wrap ftco-animate"
                >
                  <div className="block-18">
                    <div className="text">
                      <strong className="number">{counter.number}</strong>
                      <span>{counter.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
