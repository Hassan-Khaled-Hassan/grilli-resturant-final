import React, { useState } from "react";
import Navbars from './Componants/Navbar';
import Topbar from './Componants/Topbar';
import SlidersHome from './Componants/VideoCarouselBasicExample';
import OurServices from './Componants/OurServices';
import AboutUs from './Componants/AboutUs';
import SpecialDish from "./Componants/SpecialDish";
import SpecialMenus from "./Componants/SpecialMenus";
import Testimonials from "./Componants/Testimonials";
import Reservation from './Componants/Reservation';
import Features from './Componants/Features';
import Events from './Componants/Events';
import Footers from './Componants/Footers';
import BackTop from './Componants/BackTop';


function App() {
  return (
    <div className="app" style={{ height: "100vh" }}>
      <Topbar />
      <Navbars />
      <SlidersHome />
      <OurServices />
      <AboutUs />
      <SpecialDish />
      <SpecialMenus />
      <Testimonials />
      <Reservation />
      <Features />
      <Events/>
      <Footers/>
      <BackTop/>
    </div>
  );
}

export default App;
