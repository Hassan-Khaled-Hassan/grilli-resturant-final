import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Events = () => {
  return (
    <section class="section event bg-black-10" aria-label="event" id="event">
      <div class="container">
        <p class="section-subtitle label-2 text-center">Recent Updates</p>
        <h2 class="section-title headline-1 text-center">Upcoming Event</h2>
        <ul class="grid-list">
          <li>
            <ScrollAnimation animateIn="bounceInUp" duration={2}>
              {" "}
              <div
                class="event-card has-before hover:shine wow bounceInUp"
                data-wow-delay="0s"
              >
                <div
                  class="card-banner img-holder"
                  style={{ width: "350", height: "450" }}
                >
                  <img
                    src="/images/event-1.jpg"
                    width="350"
                    height="450"
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    class="img-cover"
                  />
                  <time class="publish-date label-2" datetime="2022-09-15">
                    15/09/2022
                  </time>
                </div>
                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Food, Flavour</p>
                  <h3 class="card-title title-2 text-center">
                    Flavour so good you’ll try to eat with your eyes.
                  </h3>
                </div>
              </div>
            </ScrollAnimation>
          </li>

          <li>
            <ScrollAnimation animateIn="bounceInUp" duration={3}>
              <div
                class="event-card has-before hover:shine wow bounceInUp"
                data-wow-delay="0.4s"
              >
                <div
                  class="card-banner img-holder"
                  style={{ width: "350", height: "450" }}
                >
                  <img
                    src="/images/event-2.jpg"
                    width="350"
                    height="450"
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    class="img-cover"
                  />

                  <time class="publish-date label-2" datetime="2022-09-08">
                    08/09/2022
                  </time>
                </div>

                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Healthy Food</p>

                  <h3 class="card-title title-2 text-center">
                    Flavour so good you’ll try to eat with your eyes.
                  </h3>
                </div>
              </div>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="bounceInUp" duration={4}>
              <div
                class="event-card has-before hover:shine wow bounceInUp"
                data-wow-delay="0.8s"
              >
                <div
                  class="card-banner img-holder"
                  style={{ width: "350", height: "450" }}
                >
                  <img
                    src="/images/event-3.jpg"
                    width="350"
                    height="450"
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    class="img-cover"
                  />
                  <time class="publish-date label-2" datetime="2022-09-03">
                    03/09/2022
                  </time>
                </div>
                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Recipie</p>
                  <h3 class="card-title title-2 text-center">
                    Flavour so good you’ll try to eat with your eyes.
                  </h3>
                </div>
              </div>
            </ScrollAnimation>
          </li>
        </ul>
        <a href="#" class="button button-primary">
          <span class="text text-1">View All Menu</span>

          <span class="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </a>
      </div>
    </section>
  );
};

export default Events;
