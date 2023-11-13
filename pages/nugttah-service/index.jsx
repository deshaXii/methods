"use client";
import React, { Component, useEffect } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import AOS from "aos";
import { FormattedMessage } from "react-intl";

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
              </h2>{" "}
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

      <div className="container ">
        <section className="mobile row align-items-center mopile4">
          <div className="col-sm-12 col-md-6 ">
            <p data-aos="fade-right" data-aos-delay="0" className="font-reto">
              OUR SERVICES{" "}
            </p>
            <h2 data-aos="fade-right" data-aos-delay="100">
              QR Table{" "}
            </h2>
            <p data-aos="fade-right" data-aos-delay="200">
              The loyalty points feature for cafes is important because it
              incentivizes customers to return and make repeat offering , café
              can improve customer retention, increase revenue, and create a
              positive customer experience. Loyalty points encourage customers
              to spend more{" "}
            </p>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-end align-items-center ">
            <img
              src="./img/Group 24039.png"
              alt=""
              loading="lazy"
              className="w-100"
              data-aos="fade-left"
            />
          </div>
        </section>

        <section className="about about_2  row align-items-center ">
          <div className="col-sm-12 col-md-6 d-flex justify-content-start align-items-center ">
            <img
              src="./img/page4.png"
              alt=""
              loading="lazy"
              className="w-100 pt-4"
              data-aos="fade-right"
            />
          </div>
          <div className="col-sm-12 col-md-6 ">
            <p data-aos="fade-left" data-aos-delay="0" className="font-reto">
              OUR PRODUCTS
            </p>
            <h2 data-aos="fade-left" data-aos-delay="100">
              Our Nugttah App
            </h2>
            <p data-aos="fade-left" data-aos-delay="200">
              that the goal of the loyalty points feature is to incentivize
              customers to make repeat purchases and become regulars. ultimate
              objective is to improve customer retention, increase revenue, and
              create a positive
            </p>
          </div>
        </section>
      </div>
      <img
        src="./img/line.png"
        alt=""
        className="position-fixed resh4   end-0"
      />
      <Footer />
    </>
  );
};

export default page;
