import React from 'react'

const SpecialDish = () => {
  return (
    <section class="special-dish text-center" aria-labelledby="dish-label">
      <div class="special-dish-banner">
        <img
          src="/images/special-dish-banner.jpg"
          width="940"
          height="900"
          loading="lazy"
          alt="special dish"
          class="img-cover"
        />
      </div>

      <div class="special-dish-content">
        <div class="container">
          <img
            src="/images/badge-1.png"
            width="28"
            height="41"
            loading="lazy"
            alt="badge"
            class="abs-img"
          />

          <p class="section-subtitle label-2">Special Dish</p>

          <h2 class="headline-1 section-title">Lobster Tortellini</h2>

          <p class="section-text">
            Lorem Ipsum is simply dummy text of the printingand typesetting
            industry lorem Ipsum has been the industrys standard dummy text ever
            since the when an unknown printer took a galley of type.
          </p>

          <div class="wrapper">
            <del class="del body-3">$40.00</del>

            <span class="span body-1">$20.00</span>
          </div>

          <a href="#" class="button button-primary m-0">
            <span class="text text-1">View All Menu</span>

            <span class="text text-2" aria-hidden="true">
              View All Menu
            </span>
          </a>
        </div>
      </div>

      <img
        src="/images/shape-4.png"
        width="179"
        height="359"
        loading="lazy"
        alt=""
        class="shape shape-1"
      />

      <img
        src="/images/shape-9.png"
        width="351"
        height="462"
        loading="lazy"
        alt=""
        class="shape shape-2"
      />
    </section>
  );
}

export default SpecialDish