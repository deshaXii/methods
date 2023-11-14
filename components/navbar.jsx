import Link from "next/link";
import { Offcanvas, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <form action="" id="searchBox-nav">
          <div className="searchBox-nav">
            <input
              className="searchInput-nav"
              type="text"
              name="search"
              placeholder="Search..."
            />
            <button className="searchButton-nav" type="button">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

const navbar = (props) => {
  const { locales, locale, asPath } = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const scrollThreshold = 300;
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const targetElement = document.querySelector(".submenu");
      const navSection = document.querySelector(".nav_padding");
      const navbarElement = document.querySelector(".navbar");
      const bord = document.querySelector(".bord");

      if (scrollY > scrollThreshold) {
        targetElement.classList.add("shadowed");
      } else {
        targetElement.classList.remove("shadowed");
      }

      if (scrollY >= 300) {
        navSection.classList.add("nav_active");
        navbarElement.classList.add("no-border");
        bord.style.display = "none";
      } else {
        navSection.classList.remove("nav_active");
        navbarElement.classList.remove("no-border");
        bord.style.display = "block";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    setScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);

    return () => {
      window.removeEventListener("scroll", scrollProgress);
    };
  }, []);

  const progressContainerStyle = {
    background: "var(--unnamed-color-8e8e8e)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    height: "5px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
  };

  const progressBarStyle = {
    height: "5px",
    background: "#000",
    width: scrolled,
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="progress-container" style={progressContainerStyle}>
        <div className="progress-bar" style={progressBarStyle} />
      </div>
      <nav className="nav_padding">
        <section className="navbar">
          <div
            className="search-navbar lap_nav "
            onClick={() => setModalShow(true)}
          >
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <Link href="/">
              <a>
                <img src="/img/logoo.png" alt="" loading="lazy" />
              </a>
            </Link>
            <h6 className="lap_nav">
              <Link href={"/about"}>
                <a>
                  <FormattedMessage id="about-us" />
                </a>
              </Link>
            </h6>
            <h6 className="lap_nav">
              <Link href={"/products"}>
                <a>
                  <FormattedMessage id="products" />
                </a>
              </Link>
            </h6>
            <h6 className="lap_nav">
              <Link href={"/catering-services"}>
                <a>
                  <FormattedMessage id="catering-services" />
                </a>
              </Link>
            </h6>
            <h6 className="lap_nav">
              <Link href={"/news-events"}>
                <a>
                  <FormattedMessage id="news-events" />
                </a>
              </Link>
            </h6>
            <h6 className="lap_nav">
              <Link href={"/find-store"}>
                <a>
                  <FormattedMessage id="find-a-store" />
                </a>
              </Link>
            </h6>
            <div className="navbar-lang-switcher">
              {[...locales]
                .filter((item) => item !== locale)
                .sort()
                .map((locale) => (
                  <Link href={asPath} key={locale} locale={locale}>
                    <a className="lap_nav">
                      <h6 className="d-flex flex-nowrap g justify-content-center align-items-center">
                        <i className="fa-solid fa-earth-americas"></i> {locale}
                      </h6>
                    </a>
                  </Link>
                ))}
            </div>
            <Link href={"/franchises"} className="lap_nav">
              <a>
                <button className="nav_butt">
                  <span>
                    <FormattedMessage id="franchises" />
                  </span>
                </button>
              </a>
            </Link>
          </div>
          <div className="y">
            <div variant="primary" onClick={handleShow}>
              <img src="/img/Group -4.png" alt="" loading="lazy" />
            </div>
            <div className="search-navbar " onClick={() => setModalShow(true)}>
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </div>
          </div>
          <ul className="dropdownmenu lap_nav lap_nav">
            <li>
              <img src="/img/Group -4.png" alt="" loading="lazy" />
              <div className="bord"></div>
              <ul className="submenu">
                <Link href="/hiring">
                  <li className="one_li">
                    <FormattedMessage id="hiring" />
                  </li>
                </Link>
                <Link href={"/loyality-point"}>
                  <li>
                    <FormattedMessage id="loyalty-program" />
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </section>
      </nav>

      {/* <!--  --> */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="/img/logoo.png" alt="" loading="lazy" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-center align-items-center">
            <Link href="/">
              <a>
                <img src="/img/logoo.png" alt="" loading="lazy" />
              </a>
            </Link>
            <h6 className="">
              <Link href={"/about"}>
                <a>
                  <FormattedMessage id="about-us" />
                </a>
              </Link>
            </h6>
            <h6 className="">
              <Link href={"/products"}>
                <a>
                  <FormattedMessage id="products" />
                </a>
              </Link>
            </h6>
            <h6 className="">
              <Link href={"/catering-services"}>
                <a>
                  <FormattedMessage id="catering-services" />
                </a>
              </Link>
            </h6>
            <h6 className="">
              <Link href={"/news-events"}>
                <Link href={"/find-store"}>
                  <a>
                    <FormattedMessage id="news-events" />
                  </a>
                </Link>
              </Link>
            </h6>
            <h6 className="">
              <Link href={"/find-store"}>
                <Link href={"/find-store"}>
                  <a>
                    <FormattedMessage id="find-a-store" />
                  </a>
                </Link>
              </Link>
            </h6>
            <h6>
              <Link href={"/contact-us"}>
                <Link href={"/find-store"}>
                  <a>
                    <FormattedMessage id="contact-us" />
                  </a>
                </Link>
              </Link>
            </h6>
            <h6>
              <Link href={"/hiring"}>
                <Link href={"/find-store"}>
                  <a>
                    <FormattedMessage id="join-us" />
                  </a>
                </Link>
              </Link>
            </h6>
            <div className="navbar-lang-switcher">
              {[...locales]
                .filter((item) => item !== locale)
                .sort()
                .map((locale) => (
                  <Link href={asPath} key={locale} locale={locale}>
                    <a>
                      <h6 className="d-flex flex-nowrap g justify-content-center align-items-center">
                        <i className="fa-solid fa-earth-americas"></i> {locale}
                      </h6>
                    </a>
                  </Link>
                ))}
            </div>
            <Link href={"/franchises"}>
              <a>
                <button className="nav_butt">
                  <span>
                    <FormattedMessage id="franchises" />
                  </span>
                </button>
              </a>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default navbar;
