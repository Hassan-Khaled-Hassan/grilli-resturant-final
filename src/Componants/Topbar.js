import React from "react";
import { Row, Col } from "react-bootstrap";

function Topbar() {
  return (
    <div className="topbar">
      <Row className="flex-row justify-content-between">
        <div className="first row flex-row col-7 align-items-center gap-3">
          <address className="topbar-item col-6 mb-0">
            <div className="icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <span className="span">
              Restaurant St, Delicious City, London 9578, UK
            </span>
          </address>

          <div className="separator col-1"></div>

          <div className="topbar-item item-2 col-4">
            <div className="icon">
              <i className="bi bi-clock"></i>
            </div>
            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>
        </div>
        <div className="second row flex-row col-md-12 col-lg-4 justify-content-end align-items-center">
          <a href="tel:+11234567890" className="topbar-item link col-5">
            <div className="icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <span className="span text-end">+1 123 456 7890</span>
          </a>

          <div className="separator col-1"></div>

          <a
            href="mailto:booking@restaurant.com"
            className="topbar-item link col-5"
          >
            <div className="icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <span className="span">booking@restaurant.com</span>
          </a>
        </div>
      </Row>
    </div>
  );
}

export default Topbar;
