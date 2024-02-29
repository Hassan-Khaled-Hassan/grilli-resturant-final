import React, { useEffect } from 'react'

const AboutUs = () => {
     useEffect(() => {
       const handleMouseMove = (event) => {
         const parallaxItems = document.querySelectorAll(
           "[data-parallax-item]"
         );
         let x = (event.clientX / window.innerWidth) * 10 - 5;
         let y = (event.clientY / window.innerHeight) * 10 - 5;

         x = x - x * 2;
         y = y - y * 2;

         parallaxItems.forEach((item) => {
           const speed = Number(item.getAttribute("data-parallax-speed"));
           const newX = x * speed;
           const newY = y * speed;
           item.style.transform = `translate3d(${newX}px, ${newY}px, 0px)`;
         });
       };

       window.addEventListener("mousemove", handleMouseMove);

       return () => {
         window.removeEventListener("mousemove", handleMouseMove);
       };
     }, []);
  return (
    <section
      className="section about text-center position-relative overflow-hidden"
      aria-labelledby="about-label"
      id="about"
    >
      <div className="container py-5 d-grid">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">
            Our Story
          </p>
          <h2 className="headline-1 section-title">
            Every Flavor Tells a Story
          </h2>
          <p className="section-text text-center">
            Lorem Ipsum is simply dummy text of the printingand typesetting
            industry lorem Ipsum has been the industrys standard dummy text ever
            since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen book It has survived not only
            five centuries, but also the leap into.
          </p>
          <div className="contact-label">Book Through Call</div>
          <a
            href="tel:+804001234567"
            className="body-1 contact-number hover-underline"
          >
            +80 (400) 123 4567
          </a>
          <a href="#" className="button button-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">
              Read More
            </span>
          </a>
        </div>
        <figure className="about-banner position-relative">
          <img
            src="/images/about-banner.jpg"
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="w-100 d-block h-auto"
            data-parallax-item
            data-parallax-speed="1"
          />
          <div
            className="abs-img abs-img-1 has-before position-absolute start-0"
            data-parallax-item
            data-parallax-speed="1.75"
          >
            <img
              src="/images/about-abs-image.jpg"
              width="285"
              height="285"
              loading="lazy"
              alt=""
              className="w-100"
            />
          </div>
          <div className="abs-img abs-img-2 has-before position-absolute end-0 overflow-hidden">
            <img
              src="/images/badge-2.png"
              width="133"
              height="134"
              loading="lazy"
              alt=""
            />
          </div>
        </figure>
        <img
          src="/images/shape-3.png"
          width="197"
          height="194"
          loading="lazy"
          alt=""
          className="shape"
        />
      </div>
    </section>
  );
}

export default AboutUs