"use client";
import React, { Component, useEffect, useState } from "react";
import FormJoinUs from "../../components/form-join-us";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import AOS from "aos";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const page = ({ data }) => {
  let { joinUs, settings } = data;
  console.log(settings);
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

      <div className="join">
        {/* <!-- mobile --> */}
        <div className="container ">
          <div dangerouslySetInnerHTML={{ __html: joinUs }}></div>
          <section
            className="about join_col row align-items-center "
            data-aos="fade-right"
          >
            <div className="col-sm-12 col-md-6 card_join">
              <h2>
                <FormattedMessage id="fill-in-the-data-below" />
              </h2>
              <p className="pb-4 pt-2 ">
                <FormattedMessage id="please-fill-in-the-data-below-and-we-will-send-you" />
              </p>
              <FormJoinUs />
            </div>
            <div className="col-sm-12 col-md-6 join_right p-4">
              <h6 data-aos="fade-up" data-aos-delay="0" className="font-reto">
                <FormattedMessage id="inquiries" />
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="100">
                <FormattedMessage id="for-all-inquiries" />
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                <FormattedMessage id="inquiries-description" />
              </p>
              <div className="d-flex  align-items-center icon_social pt-3">
                {settings?.instagram && (
                  <Link href={settings.instagram}>
                    <i
                      className="fa-brands fa-instagram"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    ></i>
                  </Link>
                )}
                {settings?.tiktok && (
                  <Link href="#">
                    <i
                      className="fa-brands fa-tiktok"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    ></i>
                  </Link>
                )}
                {settings?.whatsapp && (
                  <Link href="#">
                    <i
                      className="fa-brands fa-whatsapp"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    ></i>
                  </Link>
                )}
                {settings?.twitter && (
                  <Link href="#">
                    <i
                      className="fa-brands fa-twitter"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    ></i>
                  </Link>
                )}
                {settings?.email && (
                  <Link href="#">
                    <i
                      className="fa-solid fa-envelope"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    ></i>
                  </Link>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps({ query }) {
  try {
    const lang = query.lang || "en";
    const headers = { "Accept-Language": lang };
    const joinUs = await axios.get("/core/page/join-us", { headers });
    const settings = await axios.get("/core/settings", { headers });
    return {
      props: {
        data: {
          joinUs: joinUs?.data?.data?.html,
          settings: settings?.data?.data,
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
