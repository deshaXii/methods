"use client";
import React, { Component, useEffect } from "react";
import AOS from "aos";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import axios from "../../../common/axios";
import { FormattedMessage } from "react-intl";

const page = ({ data }) => {
  let { newsData } = data;
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
                <img src="../../img/Group 5733.png" alt="" loading="lazy" />
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
                src="../../img/DSC-2.png"
                alt=""
                className="w-100 home_img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="row about  event  align-items-center flex_direction_column ">
          <div className="col-md-6 col-sm-12">
            <h2 data-aos="fade-right">{newsData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: newsData.content }}></div>
          </div>
          <div
            className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center "
            data-aos="fade-left"
          >
            <img
              alt=""
              loading="lazy"
              src={newsData.image}
              className="img-events"
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps({ query, locale }) {
  try {
    const headers = { "Accept-Language": locale };
    const newsData = await axios.get(`/news/${query.slug}`, { headers });

    return {
      props: {
        data: {
          newsData: newsData?.data?.data,
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
