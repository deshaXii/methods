"use client";
import React, { Component, useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import AOS from "aos";
import { FormattedMessage } from "react-intl";
import BranchMap from "../../components/branchMap";
const googleMapApi = "AIzaSyDB8v_JV0dwZbMbUBFSjU8nbtFTYkOccO8";

const page = ({ data }) => {
  let { branches } = data;
  console.log(googleMapApi);

  let [currentBranch, setCurrentBranch] = useState("");
  useEffect(() => {
    console.log(googleMapApi);
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

      <div className="background-map">
        <div className="findstore-text text-center">
          <p className="font-reto">
            <FormattedMessage id="story-behind" />
          </p>
          <h2>
            <FormattedMessage id="brand-success" />
          </h2>
        </div>
        <div className="container">
          <div className="div_store  m_store row">
            <BranchMap branchLocations={branches} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps({locale}) {
  try {
    const headers = { "Accept-Language": locale };
    const branches = await axios.get("/core/branches", { headers });
    return {
      props: {
        data: {
          branches: branches?.data?.data,
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
