import React from "react";
import "../Menu/Menu.css"; // Import custom styles

const Menu = () => {
  const menuCategories = [
    {
      category: "Breakfast",
      items: [
        {
          id: 1,
          name: "Grilled Beef with Potatoes",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image: "src/assets/images/breakfast-1.jpg",
        },
        {
          id: 2,
          name: "Grilled Crab with Onion",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image:"src/assets/images/breakfast-2.jpg",
        },
        {
          id: 3,
          name: "Grilled Crab with Onion",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image: "src/assets/images/breakfast-3.jpg",
        },
      ],
    },
    {
      category: "Lunch",
      items: [
        {
          id: 1,
          name: "Grilled Beef with Potatoes",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image: "src/assets/images/lunch-1.jpg",
        },
        {
          id: 2,
          name: "Grilled Crab with Onion",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image: "src/assets/images/lunch-2.jpg",
        },
        {
          id: 3,
          name: "Grilled Crab with Onion",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image: "src/assets/images/lunch-3.jpg",
        },
      ],
    },
    {
      category: "Dinner",
      items: [
        {
          id: 1,
          name: "Grilled Beef with Potatoes",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image: "src/assets/images/dinner-1.jpg",
        },
        {
          id: 2,
          name: "Grilled Crab with Onion",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image: "src/assets/images/dinner-2.jpg",
        },
        {
          id: 3,
          name: "Grilled Crab with Onion",
          price: "$29",
          description: "Meat, Potatoes, Rice, Tomato",
          image: "src/assets/images/dinner-3.jpg",
        },
      ],
    },
  ];

  return (
    <section className="ftco-section">
      <div className="container-fluid px-4">
        {/* Section Header */}
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Specialties</span>
            <h2 className="mb-4">Our Menu</h2>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="row">
          {menuCategories.map((category, index) => (
            <div className="col-md-6 col-lg-4 menu-wrap" key={index}>
              {/* Category Heading */}
              <div className="heading-menu text-center">
                <h3>{category.category}</h3>
              </div>

              {/* Menu Items */}
              {category.items.map((item) => (
                <div className="menus d-flex" key={item.id}>
                  <div
                    className="menu-img img"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                  <div className="text">
                    <div className="d-flex">
                      <div className="one-half">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="one-forth">
                        <span className="price">{item.price}</span>
                      </div>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
