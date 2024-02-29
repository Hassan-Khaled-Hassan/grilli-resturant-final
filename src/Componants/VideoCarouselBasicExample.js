import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style1.css";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";

const SlidersHome = () => {
  const [slides, setSlides] = useState([]);
  const [text, setText] = useState("");
  const [Load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(true);
    axios
      .get("js/data.json")
      .then((res) => {
        setSlides(res.data.slides);
      })
      .finally(() => setLoad(false));
    //EffectFade, Autoplay,
  }, []);
  if (Load) return null;
  return (
    <section className="home text-center" aria-label="home" id="home">
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          // loop={true}
          centeredSlides={true}
          // effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ Width: "1880px", height: "880px" }}
            >
              <img className="d-block" src={item.image} alt="..." />
              <div
                class="carousel-caption m-auto d-block"
                style={{ bottom: "auto" }}
              >
                <p
                  class="label-2 section-subtitle slider-reveal"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                >
                </p>
                <h1 class="hero-title">{item.head}</h1>
                <p class="hero-text">{item.description}</p>
                <p>
                  <button className="button button-primary">
                    <span class="text text-1">View Our Menu</span>
                    <span class="text text-2" aria-hidden="true">
                      View Our Menu
                    </span>
                  </button>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <a href="#" class="hero-btn">
      <img
        src="./images/hero-icon.png"
        width="88"
        height="98"
        alt="booking icon"
      />

      <span class="span">Book A Table</span>
    </a>
    </section>
  );
};
export default SlidersHome;
