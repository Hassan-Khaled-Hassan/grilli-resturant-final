import React from 'react'

const Footers = () => {
  return (
    <footer
      class="footer section has-bg-image text-center"
      style={{
        backgroundImage: "url('./images/footer-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"}}
      id="footer"
    >
      <div class="container">
        <div class="footer-top grid-list">
          <div class="footer-brand has-before has-after position-relative">
            <a href="#" class="logo">
              <img
                src="/images/logo.svg"
                width="160"
                height="50"
                loading="lazy"
                alt="grilli home"
              />
            </a>
            <address class="body-4">
              Restaurant St, Delicious City, London 9578, UK
            </address>
            <a href="mailto:booking@grilli.com" class="body-4 contact-link">
              booking@grilli.com
            </a>
            <a href="tel:+88123123456" class="body-4 contact-link">
              Booking Request : +88-123-123456
            </a>
            <p class="body-4">Open : 09:00 am - 01:00 pm</p>
            <div class="wrapper d-flex justify-content-center">
              <div class="separator"></div>
              <div class="separator"></div>
              <div class="separator"></div>
            </div>
            <p class="title-1">Get News & Offers</p>
            <p class="label-1">
              Subscribe us & Get
              <span class="span d-inline text-white">25% Off.</span>
            </p>
            <form action="" class="input-wrapper">
              <div class="icon-wrapper position-relative">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  autocomplete="off"
                  class="input-field"
                />
              </div>

              <button type="submit" class="button button-secondary">
                <span class="text text-1">Subscribe</span>

                <span class="text text-2" aria-hidden="true">
                  Subscribe
                </span>
              </button>
            </form>
          </div>
          <ul class="footer-list d-grid">
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Menus
              </a>
            </li>
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Our Chefs
              </a>
            </li>
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul class="footer-list d-grid">
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="#"
                class="label-2 footer-link hover-underline position-relative text-uppercase"
              >
                Google Map
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p class="copyright">
            &copy; 2022 Grilli. All Rights Reserved | Crafted by
            <a
              href="#"
              target="_blank"
              class="link text-decoration-underline d-inline"
            >
              Hassan-Khaled
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footers