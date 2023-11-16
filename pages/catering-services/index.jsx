"use client";
import React, { Component, useEffect, useState } from "react";

import Slider from "react-slick";

import AOS from "aos";

import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const page = ({ data }) => {
  let { cateringServices } = data;
  const { locale } = useRouter();
  const headers = { "Accept-Language": locale };
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [companyName, setCompanyName] = useState("");
  const SendServiceRequest = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://methods-backend.puiux.org/api/forms/service-request",
        {
          email,
          name,
          phone,
          company_name: companyName,
        },
        {
          headers,
        }
      )
      .then((res) => {
        if (res.data?.status) {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setCompanyName("");
          setName("");
          setEmail("");
          setPhone("");
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
      easing: "ease-in-out", // تعيين التموج (التنوع) للانتقال
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: (
      <button classNameName="slick-prev">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    nextArrow: (
      <button classNameName="slick-next">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    ),
  };
  return (
    <>
      <section className="home">
        <div className="back_home">
          <Navbar />
          {/* <!-- home img --> */}
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
        <section className="car6">
          <h2 className="pb-5">
            <FormattedMessage id="latest-photos" />
          </h2>
          <Slider {...settings}>
            {cateringServices.map((item) => (
              <div key={item.id}>
                <div classNameName="slick-img" data-aos="fade-up">
                  <img src={item.image} alt="" loading="lazy" />
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section className="about about_2  row align-items-center ">
          <div className="col-sm-12 col-md-6 ">
            <h2 data-aos="fade-right">
              <FormattedMessage id="fill-in-the-data-below" />
            </h2>
            <p className="mb-4" data-aos="fade-right">
              <FormattedMessage id="please-fill-in-the-data-below-and-we-will-send-you" />
            </p>

            <form
              onSubmit={(e) => SendServiceRequest(e)}
              id="form-catering-services"
            >
              <div className="login_card">
                <div
                  className="wave-group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name-catering-services"
                    className="input"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <i className="fa-solid fa-user label-char"></i>
                    <span className="label-char" style={{ "--index": 0 }}>
                      N
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      m
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      e
                    </span>
                  </label>
                </div>
                <div
                  className="wave-group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <input
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email-catering-services"
                    className="input"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <i className="fa-solid fa-envelope label-char"></i>
                    <span className="label-char" style={{ "--index": 0 }}>
                      E
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      m
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      i
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      l
                    </span>
                  </label>
                </div>
                <div
                  className="wave-group"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <input
                    required=""
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone-catering-services"
                    className="input"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <i className="fa-solid fa-phone label-char"></i>
                    <span className="label-char" style={{ "--index": 0 }}>
                      p
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      h
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      o
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      n
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      e
                    </span>
                    <span className="label-char m_n" style={{ "--index": 5 }}>
                      n
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      u
                    </span>
                    <span className="label-char" style={{ "--index": 7 }}>
                      m
                    </span>
                    <span className="label-char" style={{ "--index": 8 }}>
                      p
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 10 }}>
                      r
                    </span>
                  </label>
                </div>
                <div
                  className="wave-group"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <input
                    required=""
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    type="text"
                    className="input"
                    id="conutry-catering-services"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <img
                      src="./img/Frame.png"
                      alt=""
                      loading="lazy"
                      className=" label-char"
                      width="100%"
                      height="100%"
                    />
                    <span className="label-char" style={{ "--index": 0 }}>
                      C
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      o
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      m
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      p
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 5 }}>
                      n
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      y
                    </span>

                    <span className="label-char m_n" style={{ "--index": 7 }}>
                      n
                    </span>
                    <span className="label-char" style={{ "--index": 7 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 7 }}>
                      m
                    </span>
                    <span className="label-char" style={{ "--index": 8 }}>
                      e
                    </span>
                  </label>
                </div>
                <button
                  className="btm_send"
                  id="btn-catering-services"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  type="submit"
                >
                  <FormattedMessage id="send" />
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-end align-items-center login_card_div">
            <img
              src="./img/page6 (2).png"
              alt=""
              loading="lazy"
              className="login_card_img pt-4"
              data-aos="fade-left"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps({ locale }) {
  try {
    const headers = { "Accept-Language": locale };
    const cateringServices = await axios.get("/core/catering-services", {
      headers,
    });
    return {
      props: {
        data: {
          cateringServices: cateringServices?.data?.data,
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
