import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => {
  return (
    <section class="section features text-center" aria-label="features">
      <div class="container">
        <p class="section-subtitle label-2">Why Choose Us</p>

        <h2 class="headline-1 section-title">Our Strength</h2>

        <ul class="grid-list">
          <li class="feature-item">
            <ScrollAnimation animateIn="bounceInUp" duration={2}>
              {" "}
              <div class="feature-card wow bounceInUp" data-wow-delay="0s">
                <div class="card-icon">
                  <img
                    src="/images/features-icon-1.png"
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 class="title-2 card-title">Hygienic Food</h3>

                <p class="label-1 card-text">
                  Lorem Ipsum is simply dummy printing and typesetting.
                </p>
              </div>
            </ScrollAnimation>
          </li>

          <li class="feature-item">
            <ScrollAnimation animateIn="bounceInDown" duration={3}>
              <div class="feature-card wow bounceInDown" data-wow-delay="0.3s">
                <div class="card-icon">
                  <img
                    src="/images/features-icon-2.png"
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 class="title-2 card-title">Fresh Environment</h3>

                <p class="label-1 card-text">
                  Lorem Ipsum is simply dummy printing and typesetting.
                </p>
              </div>
            </ScrollAnimation>
          </li>

          <li class="feature-item">
            <ScrollAnimation animateIn="bounceInUp" duration={4}>
              {" "}
              <div class="feature-card wow bounceInUp" data-wow-delay="0.6s">
                <div class="card-icon">
                  <img
                    src="/images/features-icon-3.png"
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 class="title-2 card-title">Skilled Chefs</h3>

                <p class="label-1 card-text">
                  Lorem Ipsum is simply dummy printing and typesetting.
                </p>
              </div>
            </ScrollAnimation>
          </li>

          <li class="feature-item">
            <ScrollAnimation animateIn="bounceInDown" duration={4}>
              <div class="feature-card wow bounceInDown" data-wow-delay="0.9s">
                <div class="card-icon">
                  <img
                    src="/images/features-icon-4.png"
                    width="100"
                    height="80"
                    loading="lazy"
                    alt="icon"
                  />
                </div>

                <h3 class="title-2 card-title">Event & Party</h3>

                <p class="label-1 card-text">
                  Lorem Ipsum is simply dummy printing and typesetting.
                </p>
              </div>
            </ScrollAnimation>
          </li>
        </ul>

        <img
          src="/images/shape-7.png"
          width="208"
          height="178"
          loading="lazy"
          alt="shape"
          class="shape shape-1"
        />

        <img
          src="/images/shape-8.png"
          width="120"
          height="115"
          loading="lazy"
          alt="shape"
          class="shape shape-2"
        />
      </div>
    </section>
  );
}

export default Features