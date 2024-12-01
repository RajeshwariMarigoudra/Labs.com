import React from 'react';
import './PortfolioItem.css';
import blueportfolio from "../../assets/images/labs-image.jpg"; // Example image path
import blueportfolio1 from "../../assets/images/blueportfolio.jpg"; // Example image path
import blueportfolio2 from "../../assets/images/protfolio2.jpg"; // Example image path

const PortfolioItem = () => {
  const portfolioData = [
    { title: "Kisan Supply", category: "Ecommerce", image: blueportfolio, link: "https://dxminds.com/portfolio/kisan-supply/" },
    { title: "Project 2", category: "Web Development", image: blueportfolio1, link: "https://dxminds.com/portfolio/project-2/" },
    { title: "Project 3", category: "App Development", image: blueportfolio, link: "https://dxminds.com/portfolio/project-3/" },
    { title: "Project 4", category: "Design", image: blueportfolio2, link: "https://dxminds.com/portfolio/project-4/" },
    { title: "Project 5", category: "Ecommerce", image: blueportfolio, link: "https://dxminds.com/portfolio/project-5/" },
    { title: "Project 6", category: "Branding", image: blueportfolio, link: "https://dxminds.com/portfolio/project-6/" },
    { title: "Project 7", category: "Marketing", image: blueportfolio2, link: "https://dxminds.com/portfolio/project-7/" },
    { title: "Project 8", category: "Consulting", image: blueportfolio1, link: "https://dxminds.com/portfolio/project-8/" },
    { title: "Project 9", category: "Tech", image: blueportfolio, link: "https://dxminds.com/portfolio/project-9/" },
    { title: "Project 10", category: "Healthcare", image: `https://dxminds.com/wp-content/uploads/elementor/thumbs/1-q6ctbyc86pnsvdesnwqccpom7ywf0a3wyrzyv5ty9w.png`, link: "https://dxminds.com/portfolio/project-10/" },
  ];

  return (
    <div className="portfolio-container">
      {portfolioData.map((item, index) => (
        <div key={index} className="portfolio-item">
          <div className="item-thumbnail">
            <img src={item.image} alt={`Portfolio item ${item.title}`} className="portfolio-image" />
            <div className="overlay"></div>
            <a href={item.link} className="portfolio-link">
              <span className="portfolio-title">{item.title}</span>
              <span className="portfolio-category">{item.category}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioItem;
