import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const OurServices = () => {
    
  return (
    <section
      className="section service text-center position-absolute w-100 overflow-hidden"
      aria-label="service"
      id="service"
    >
      <div className="container py-5">
        <p className="section-subtitle">Flavors For Royalty</p>

        <h2 className="headline-1 section-title text-white wow bounceInDown">
          We Offer Top Notch
        </h2>

        <p className="section-text wow bounceInDown" data-wow-delay="0.4s">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever.
        </p>

        <ul className="grid-list">
          <li>
            <ScrollAnimation animateIn="bounceInUp" duration={3}>
              <div
                className="service-card overflow-hidden wow bounceInUp"
                data-wow-delay="0s"
              >
                <a
                  href="#"
                  className="has-before position-relative hover:shine"
                >
                  <figure
                    className="card-banner img-holder overflow-hidden"
                    style={{
                      width: "285px",
                      height: "340px",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src="/images/service-1.jpg"
                      width="285"
                      height="336"
                      loading="lazy"
                      alt="Breakfast"
                      className="img-cover d-block w-100 h-100"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#">Breakfast</a>
                  </h3>

                  <a href="#" className="btn-text hover-underline label-2">
                    View Menu
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </li>

          <li>
            <ScrollAnimation animateIn="bounceInUp" duration={4}>
              {" "}
              <div
                className="service-card overflow-hidden wow bounceInUp"
                data-wow-delay="0.3s"
              >
                <a
                  href="#"
                  className="has-before position-relative hover:shine"
                >
                  <figure
                    className="card-banner img-holder overflow-hidden"
                    style={{
                      width: "285px",
                      height: "340px",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src="/images/service-2.jpg"
                      width="285"
                      height="336"
                      loading="lazy"
                      alt="Appetizers"
                      className="img-cover d-block w-100 h-100"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#">Appetizers</a>
                  </h3>

                  <a href="#" className="btn-text hover-underline label-2">
                    View Menu
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </li>

          <li>
            <ScrollAnimation animateIn="bounceInUp" duration={6}>
              <div
                className="service-card overflow-hidden wow bounceInUp"
                data-wow-delay="0.6s"
              >
                <a
                  href="#"
                  className="has-before position-relative hover:shine"
                >
                  <figure
                    className="card-banner img-holder overflow-hidden"
                    style={{
                      width: "285px",
                      height: "340px",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src="/images/service-3.jpg"
                      width="285"
                      height="336"
                      loading="lazy"
                      alt="Drinks"
                      className="img-cover d-block w-100 h-100"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#">Drinks</a>
                  </h3>

                  <a href="#" className="btn-text hover-underline label-2">
                    View Menu
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </li>
        </ul>

        <img
          src="/images/shape-1.png"
          width="220"
          height="350"
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <img
          src="/images/shape-2.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
      </div>
    </section>
  );
}

export default OurServices