"use client";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const Navbar = dynamic(() => import("@/Components/navbar"), { ssr: false });

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
      easing: "ease-in-out", // تعيين التموج (التنوع) للانتقال
    });
  }, []);

  return (
    <>
      <section className="home">
        <div className="back_home">
          <Navbar />

          <div className="position-relative  home_3">
            <div className="logo_home ">
              <div data-aos="fade-down" data-aos-delay="100">
                <img src="./img/Group 5733.png" alt="" loading="lazy" />
              </div>
              <h2
                className="d-flex align-items-center writeit justify-content-center mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <FormattedMessage id="perfecting-your-way" />
              </h2>
            </div>
            <div className="h__img">
              <img
                src="./img/DSC-2.png"
                alt=""
                className="w-100 home_img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="carrd">
          <p className="font-reto">OUR SERVICES</p>
          <h2>Check Our Services</h2>
          <div className="cardd row align-items-center ">
            <div className="col-md-4 col-sm-12 card-content">
              <img src="./img/ge.png" alt="" loading="lazy" />
              <h6>Franchise</h6>
              <h5>(Franchise)</h5>
              <p className="p_colo_r">
                Lorem Ipsum is siimply dummmy texxt of the printingg andd
                typesetting industry.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 card-content">
              <img src="./img/applications.png" alt="" loading="lazy" />
              <h6>Nugttah Services</h6>
              <h5> (Loyalty Points)</h5>
              <p className="p_colo_r">
                Lorem Ipsum is siimply dummmy texxt of the printingg andd
                typesetting industry.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 card-content">
              <img src="./img/food-tray.png" alt="" loading="lazy" />
              <h6>Catering Services </h6>
              <h5>(Catering Services)</h5>

              <p className="p_colo_r">
                Lorem Ipsum is siimply dummmy texxt of the printingg andd
                typesetting industry.
              </p>
            </div>
          </div>
        </section>

        <section className="row about home11 align-items-center flex_direction_column ">
          <div className="col-md-6 col-sm-12">
            <h6
              className="our_productsp font-reto"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              FRANCHISE OVERVIEW{" "}
            </h6>
            <h2 data-aos="fade-right" data-aos-delay="200">
              Franchise Overview
            </h2>
            <ul>
              <li data-aos="fade-right" data-aos-delay="400">
                A commercial contract concluded between two parties according to
                which one of the parties to the contract, who is the trademark
                owner, grants the other party a license to work according to his
                trademark, where the benefit is mutual and benefits everyone.
                Franchise”, so the franchise is valid for a specific period and
                in certain areas according to the contract concluded.
              </li>
            </ul>
            <ul className="mt-3">
              <li data-aos="fade-right" data-aos-delay="600">
                The work mechanisms are in accordance with the brand policy,
                internal culture, and its visual identity, and the holder of the
                right is obliged to comply with that, and the work is carried
                out based on the “work system regulations” by which the brand is
                managed, and this follows all branches of the brand around the
                world, and through it you get a percentage of the profits.
              </li>
            </ul>
          </div>
          <div className="col-md-6  col-sm-12 d-flex justify_content_center justify-content-end align-items-center ">
            <div className="w-100 home11_img d-flex flex-nowrap align-items-center justify-content-center ">
              <div className="d-flex justify-content-center w-100">
                <img
                  src="./img/2022-06-23.png"
                  alt=""
                  loading="lazy"
                  className="mt-auto"
                  data-aos="fade-right"
                />
                <img
                  src="./img/2021-01-21 (1).png"
                  alt=""
                  loading="lazy"
                  data-aos="fade-down"
                />
              </div>
              <div className="w-100 ">
                <img
                  src="./img/2020-08-08.png"
                  alt=""
                  loading="lazy"
                  className=" m-auto d-flex justify-content-center"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mobile row align-items-center mopile4 laytly">
          <div className="col-sm-12 col-md-6 ">
            <p data-aos="fade-right" data-aos-delay="0" className="font-reto">
              laytly{" "}
            </p>
            <h2 data-aos="fade-right" data-aos-delay="100">
              The importance of the feature
            </h2>
            <p data-aos="fade-right" data-aos-delay="200">
              The loyalty points feature for cafes is important because it
              incentivizes customers to return and make repeat offering , café
              can improve customer retention, increase revenue, and create a
              positive customer experience. Loyalty points encourage customers
              to spend more{" "}
            </p>
            <Link
              className="btn-31 mt-4"
              href="https://play.google.com/store/apps/details?id=com.nugttahapp&hl=en_SG&gl=US&pli=1"
              target="_blank"
            >
              <span className="text-container">
                <span className="text">download app</span>
              </span>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 d-flex  align-items-center kas">
            <img
              src="./img/laytly.png"
              alt=""
              loading="lazy"
              className="laytly_img"
              data-aos="fade-left"
            />
          </div>
        </section>
      </div>

      {/* </div> */}
    </>
  );
};

export default page;
