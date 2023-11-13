import React from "react";

const PreloadeHome = () => {
  return (
    <div>
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="load_logo">
            <div data-aos="fade-down">
              <img
                src="./img/logo_load.webp"
                width="300"
                loading="lazy"
                alt=""
                className="img_logo"
              />
            </div>
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
};

export default PreloadeHome;
