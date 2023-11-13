"use client";
import React, { Component, useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import { FormattedMessage } from "react-intl";

const page = ({ data }) => {
  let { newsEventsSectionOne } = data;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
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
      <div className="container ">
        <div dangerouslySetInnerHTML={{ __html: newsEventsSectionOne }}></div>
      </div>
      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps() {
  try {
    const newsEventsSectionOne = await axios.get(
      "/core/page/news-events-section-one"
    );

    return {
      props: {
        data: {
          newsEventsSectionOne: newsEventsSectionOne?.data?.data?.html,
        },
      },
    };
  } catch (err) {
    console.log("err", err);
    return {
      props: {
        error: err.message,
      },
    };
  }
}
