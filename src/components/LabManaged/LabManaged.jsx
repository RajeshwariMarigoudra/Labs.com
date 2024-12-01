import React, { useState } from 'react';
import './LabManaged.css';
import { Carousel } from 'react-bootstrap';

const LabManaged = () => {

  const [activeImage, setActiveImage] = useState('https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08133048/LABS_March-21_4th-Floor_14-1-1.webp');

  const imageOptions = [
    {
      label: 'Communal Lounge',
      imageUrl: 'https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08133048/LABS_March-21_4th-Floor_14-1-1.webp'
    },
    {
      label: 'Gym',
      imageUrl: 'https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08133105/LABS-Hawley-Lock-gym-1.webp'
    },
    {
      label: 'Lobby & Bar',
      imageUrl: 'https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08133122/VictoriaHouse-4778-Edit-2000x1333-1.webp'
    },
    {
      label: 'Meeting Room',
      imageUrl: 'https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08133134/LABS_Southampton-Place_Meeting-room_Study_3.webp'
    },
    {
      label: 'Communal Kitchen',
      imageUrl: 'https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08133153/LABS_90HighHolborn_lounge_5-1-scaled-1.webp'
    }
  ];

  const handleImageClick = (imageUrl) => {
    setActiveImage(imageUrl);
  };

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    teamSize: '1 - 20',
    phone: '',
    email: '',
    tourLocation: 'LABS Managed',
    tourService: 'Roaming',
    updatesAgreement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log('Form submitted:', formData);
  };

  
  return (
    <div className="container top-pad lighter" id="container" data-page="location">
      {/* Location Cover */}
      <div className="location-cover full-height lm-cover lighter show">
        <div className="location-cover-gallery">
          <div className="slick-list">
            <div className="slick-track">
              <div className="item slick-slide slick-current slick-active" style={{ backgroundImage: 'url(https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08130900/hero-img.png)' }}>
                <div className="image bg">
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center-wrapper show">
          <div className="center">
            <h1>LABS<br /><strong>MANAGED</strong></h1>
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="content-wrapper lighter" id="the-next">
        <div className="section content-max-width">
          <h3 className="lm-h3">Introducing LABS MANAGED</h3>
          <p className="lm-p desc m-t-10">
            Using our in-depth expertise of the office sector, we will help you define your space requirements, source new workplace options faster, and secure the ideal office space that personifies your culture and brand.
          </p>
          <p>
            LABS’ accomplished design, tech, and project management specialists can then collaborate with you to provide expert advice to build, furnish and style your space to suit your needs and new ways of working, equipping your business with surroundings devised to spark innovation and build meaningful partnerships.
          </p>
          <p>
            Our dedicated operations team will then take care of the ongoing management of your new workspace to ensure an efficient, smooth, and seamless service for just one monthly fee.
          </p>
          <p>
            With this service from LABS, we can ensure a single point of delivery that sees you through a smooth and simplified office search experience.
          </p>
          <a className="lm-button m-t-10" href="#book-your-tour">ENQUIRE NOW</a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="content-wrapper darker">
        <div className="lm-section services content-max-width">
          <div className="row services-container">
            <div className="col-md-6">
              <h4 className="lm-h4">
                <img className="benefits-icon" src="https://wp-media.labs.com/wp-content/uploads/2023/01/31153138/like-icon-1.svg" alt="upfront-benefits" />
                <strong>UPFRONT BENEFITS</strong>
              </h4>
              <div className="five-points">
                {['No upfront costs', 'Flexible contract', 'Expert teams', 'A quicker office search'].map((benefit, index) => (
                  <div className="lm-point wow fadeInUp" key={index}>
                    <img className="check-icon" src="https://labs.com/wp-content/themes/labs/images/circlecheck-icon.svg" alt="icon-check" />
                    <h5 className="lm-h5">{benefit}</h5>
                    <p className="lm-p1">Detailed description of {benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 lm-section__right">
              <h4 className="lm-h4">
                <img className="benefits-icon" src="https://wp-media.labs.com/wp-content/uploads/2023/01/31153138/ongoing-icon-2.svg" alt="ongoing-benefits" />
                <strong>ONGOING BENEFITS</strong>
              </h4>
              <div className="five-points">
                {['Transparent billing', 'One stop shop', 'Fully customized'].map((benefit, index) => (
                  <div className="lm-point wow fadeInUp" key={index}>
                    <img className="check-icon" src="https://labs.com/wp-content/themes/labs/images/circlecheck-icon.svg" alt="icon-check" />
                    <h5 className="lm-h5">{benefit}</h5>
                    <p className="lm-p1">Description of {benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="section two mt-sm-0 content-max-width expertise-section">
        <div className="events-location part narrowleft lm-left-part h-auto wow fadeInUp location-cities lm-carousel" data-wow-delay=".2s">
          <h4 className="lm-h4-bigger">
            <strong>Expertise in delivering <br /> a wide range of spaces</strong>
          </h4>
          <div className="five-points location london active">
            {imageOptions.map((option, index) => (
              <div className="point wow fadeInUp location__item managed-item" key={index}>
                <a href="javascript:void(0);" onClick={() => handleImageClick(option.imageUrl)} data-index={`city-0-${index}`} className={activeImage === option.imageUrl ? 'active' : ''}>
                  <p>{option.label}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="events-location managed-gallery gallery-right part with-image wide1 labs-managed-spaces">
          <div className="part with-image wide h-440">
            <Carousel>
              {imageOptions.map((option, index) => (
                <Carousel.Item key={index}>
                  <div className="image bg" style={{ backgroundImage: `url(${option.imageUrl})` }} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="container lm-section__clients darker">
        <div className="our-clients">
          <h4><strong>Our Clients</strong></h4>
          <ul className="client-logo">
            {[
              "client-thoughtmachine-2.svg",
              "client-moonbug-1.svg",
              "client-airwair-1.svg",
              "client-unruly-1.svg",
              "client-youlend-1.svg"
            ].map((clientLogo, index) => (
              <li key={index}>
                <img 
                  src={`https://wp-media.labs.com/wp-content/uploads/2023/01/31153138/${clientLogo}`} 
                  alt={`Client ${index + 1}`} 
                  className="client-logo-img" 
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

       {/* How LABS will work with you */}
      <div className="content-wrapper lighter">
        <div className="section lm-section content-max-width">
          <div className="work text-center">
            <h3 className="lm-h3"><strong>How LABS will work with you</strong></h3>
            <p className="lm-p">
              As part of our four-step formula to provide you with the perfect office, LABS will appoint a team of specialists to work closely with you throughout the duration of the project and to provide ongoing operational support throughout your contract with us.
            </p>

            <div className="row work__icons">
              {['SOURCE', 'DESIGN', 'DELIVER', 'RUN'].map((step, index) => (
                <div key={index} className="work__icons--box">
                  <h5 className="lm-h5-bold"><strong>{step}</strong></h5>
                  <img 
                    className="work-icon" 
                    src={`https://wp-media.labs.com/wp-content/uploads/2023/01/31153138/${step.toLowerCase()}-icon-1.svg`} 
                    alt={step} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Process Details */}
          <div className="lm-info">
            {['SOURCE', 'DESIGN', 'DELIVER', 'RUN'].map((step, index) => (
              <div key={index} className="row lm-info__details">
                <div className="col-md-6 lm-info__details--left">
                  <img 
                    src={`https://s3.eu-west-2.amazonaws.com/wp-media.labs.com/wp-content/uploads/2022/11/08133445/${step.toLowerCase()}_img.webp`} 
                    style={{ width: '100%' }} 
                    alt={step} 
                  />
                </div>
                <div className="col-md-6 lm-info__details--right">
                  <h4 className="lm-h4">
                    <img 
                      className="info-icon" 
                      src={`https://wp-media.labs.com/wp-content/uploads/2023/01/31153138/dark-${step.toLowerCase()}-icon-1.svg`} 
                      alt={step} 
                    />
                    <strong>{step}</strong>
                  </h4>
                  <p className="lm-p">
                    <strong>{step === 'SOURCE' ? 'Finding the perfect space for you and your team, in 120 days or less.' :
                      step === 'DESIGN' ? 'Leveraging our expert in-house design team we will help you bring your ideal office environment to life.' :
                      step === 'DELIVER' ? 'Turning your designs into reality.' :
                      'We run the office, so you can run your organisation.'}
                  </strong>
                  </p>

                  {/* Step Description */}
                  <div className="lm-p">
                    {step === 'SOURCE' && (
                      <>
                        <p>We’ll work with you to understand and define your brief to start searching for your new office space.</p>
                        <p>This will allow us to explore potential locations and their benefits to your business...</p>
                      </>
                    )}
                    {step === 'DESIGN' && (
                      <>
                        <h5 className="lm-info__details--h5">We can support you with:</h5>
                        <div className="info-icon-p">
                          <p><img className="info-check-icon" src="https://wp-media-staging.labs.com/wp-content/uploads/2022/08/10160812/circlecheck-icon-1.svg" alt="" /></p>
                          <p className="lm-p">Configuring your workspace to create the optimal layout for your business’s needs...</p>
                        </div>
                        <div className="info-icon-p">
                          <p><img className="info-check-icon" src="https://wp-media-staging.labs.com/wp-content/uploads/2022/08/10160812/circlecheck-icon-1.svg" alt="" /></p>
                          <p className="lm-p">Creating a unique interior design aesthetic that enhances your company’s culture...</p>
                        </div>
                        <div className="info-icon-p">
                          <p><img className="info-check-icon" src="https://wp-media-staging.labs.com/wp-content/uploads/2022/08/10160812/circlecheck-icon-1.svg" alt="" /></p>
                          <p className="lm-p">Selecting the best furnishings for you, keeping in mind the need to balance function, quality and comfort...</p>
                        </div>
                        <p className="lm-p p-t-10">We’ll provide bespoke CGI’s of your space as the design evolves...</p>
                      </>
                    )}
                    {step === 'DELIVER' && (
                      <>
                        <p>Once the designs are completed for your office we will shortlist trusted suppliers...</p>
                      </>
                    )}
                    {step === 'RUN' && (
                      <>
                        <p>Leave us to handle the day-to-day operations of your offices...</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Existing sections continue... */}

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">
                <strong>Enquire Now</strong>
              </h4>
              <form onSubmit={handleSubmit} className="go-black form-container">
                {/* Hidden Fields */}
                <input type="hidden" name="_csrf_token" value="ea7508cd90" />
                <input type="hidden" name="lead_source" value="Website" />
                <input type="hidden" name="00N3z00000Bw2P7" value="New Business" />
                <input type="hidden" name="tour_url" value="https://labs.com/labs-managed/" />

                {/* Form Fields */}
                <div className="form-row mb-3">
                  <div className="col-md-6">
                    <label>Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Company name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col-md-6">
                    <label>Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col-md-6">
                    <label>Team Size</label>
                    <select
                      className="form-control"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      required
                    >
                      <option value="1 - 20">1 - 20</option>
                      <option value="21 - 50">21 - 50</option>
                      <option value="51 - 100">51 - 100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Tour Location</label>
                    <select
                      className="form-control"
                      name="tourLocation"
                      value={formData.tourLocation}
                      onChange={handleChange}
                    >
                      <option value="LABS Managed">LABS Managed</option>
                      <option value="LABS 90 High Holborn">LABS 90 High Holborn</option>
                      <option value="LABS Southampton Place">LABS Southampton Place</option>
                      <option value="LABS Victoria House">LABS Victoria House</option>
                      <option value="LABS Hogarth House">LABS Hogarth House</option>
                      <option value="LABS House">LABS House</option>
                      <option value="LABS Atrium">LABS Atrium</option>
                    </select>
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col-md-6">
                    <label>Tour Service</label>
                    <select
                      className="form-control"
                      name="tourService"
                      value={formData.tourService}
                      onChange={handleChange}
                    >
                      <option value="Roaming">Roaming</option>
                      <option value="Private">Private</option>
                      <option value="Enterprise">Enterprise</option>
                      <option value="Meeting Rooms">Meeting Rooms</option>
                      <option value="Event Space">Event Space</option>
                    </select>
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="tour_updates_agreement"
                    name="updatesAgreement"
                    checked={formData.updatesAgreement}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="tour_updates_agreement">
                    Yes, I would like to receive updates from LABS regarding special offers, events, and promotions.
                  </label>
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>

                <div className="form-row last text-center">
                  <p>
                    If you would prefer to speak to us directly, please contact us on{' '}
                    <a href="mailto:sales@labs.com">sales@labs.com</a> or call{' '}
                    <a href="tel:02037612800">0203 761 2800</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabManaged;
