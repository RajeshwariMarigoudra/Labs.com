import React from "react";
import "../InstagramGallery/InstagramGallery.css"; // Import your custom CSS

// Import images properly from the assets folder
import insta1 from "../../assets/images/insta-1.jpg";
import insta2 from "../../assets/images/insta-2.jpg";
import insta3 from "../../assets/images/insta-3.jpg";
import insta4 from "../../assets/images/insta-4.jpg";
import insta5 from "../../assets/images/insta-5.jpg";

const InstagramGallery = () => {
  // Define the images as imported assets
  const images = [insta1, insta2, insta3, insta4, insta5];

  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          {images.map((image, index) => (
            <div className="col-md" key={index}>
              <a
                href="#"
                className="instagram img d-flex align-items-center justify-content-center"
                // Corrected the backgroundImage syntax
                style={{ backgroundImage: `url(${image})` }}
              >
                <span className="ion-logo-instagram"></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
