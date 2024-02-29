import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navbars = () => {
  const [isMobile, setIsMobile] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
     const handleScroll = () => {
       if (window.scrollY > 250) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };
    // Initial check
    handleResize();
    // Event listener for resize
    window.addEventListener("resize", handleResize);
     window.addEventListener("scroll", handleScroll);
    // Remove event listener on component unmount
    return () => {window.removeEventListener("resize", handleResize); window.removeEventListener("scroll", handleScroll);}
  }, []);
  return (
    <header
      className={`header position-fixed w-100 start-0  ${
        isScrolled ? "active" : ""
      }`}
      data-header
    >
      <Navbar expand="lg" className="navbar py-3 f">
        <Container fluid className="px-5 gap-3">
          <Navbar.Brand href="#">
            <img
              src={"/images/logo.svg"}
              width="160"
              height="50"
              alt="Grilli - Home"
            />
          </Navbar.Brand>
          <button
            className="button-secondary"
            style={{ display: isMobile ? "none" : "block" }}
          >
            <span className="text text-1">Find A Table</span>
            <span className="text text-2" aria-hidden="true">
              Find A Table
            </span>
          </button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navbar-nav mx-0 mb-2 mb-lg-0 d-flex justify-content-center gap-lg-4">
              <Nav.Item>
                <Nav.Link
                  href="#"
                  className="nav-link hover-underline active label-2 position-relative text-uppercase"
                >
                  <div className="separator"></div>
                  <span className="span">Home</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#about"
                  className="nav-link hover-underline label-2 position-relative text-uppercase"
                >
                  <div className="separator"></div>
                  <span className="span">about us</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#menu"
                  className="nav-link hover-underline label-2 position-relative text-uppercase"
                >
                  <div className="separator"></div>
                  <span className="span">menus</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#event"
                  className="nav-link hover-underline label-2 position-relative text-uppercase"
                >
                  <div className="separator"></div>
                  <span className="span">our events</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#footer"
                  className="nav-link hover-underline label-2 position-relative text-uppercase"
                >
                  <div className="separator"></div>
                  <span className="span">our contact</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navbars;
