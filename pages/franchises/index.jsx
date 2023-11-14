"use client";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import Aos from "aos";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const page = ({ data }) => {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [country, setCountry] = useState("");

  const SendFranchiseRequest = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://methods-backend.puiux.org/api/forms/franchise-request",
        {
          email,
          name,
          phone,
          address,
          country,
        },
        {
          headers: {
            "Accept-Language": "ar",
          },
        }
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  let {
    franchisesOverview,
    faqs,
    franchisesApplyContent,
    settings,
    franchisesModels,
  } = data;

  useEffect(() => {
    console.log(faqs);
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: franchisesOverview }} />
        {/* <!--  --> */}
        <section className="caros11_text">
          <div className="text-center">
            <h6>FRANCHISE MODELS</h6>
            <h2>Franchise Models</h2>
          </div>
          <div className="caros ">
            <Slider {...sliderSettings}>
              {franchisesModels.map((item) => (
                <div key={item.id} className="card-content-caros">
                  <img
                    src="./img/coffee-beans.png"
                    alt={`${item.title} image`}
                    loading="lazy"
                  />
                  <h6>{item.title}) </h6>
                  <p>{item.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        {/* <!--  --> */}
        <section className="row accordion_div about align-items-center flex_direction_column mt-4">
          <div className="col-md-6 col-sm-12 about_right">
            <p
              data-aos="fade-right"
              data-aos-delay="0"
              className="font-reto color-p-FAQ"
            >
              <FormattedMessage id="apply-for" />
            </p>
            <h2 data-aos="fade-right" data-aos-delay="100">
              FAQ(<FormattedMessage id="faq" />)
            </h2>
            <p data-aos="fade-right" data-aos-delay="200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-end align-items-center accordion_div_right">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              {faqs.map((item, index) => (
                <Accordion.Item eventKey={index} key={item.id}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: franchisesApplyContent }} />
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
            <form id="join-us-form" onSubmit={(e) => SendFranchiseRequest(e)}>
              <div className="login_card">
                <div className="wave-group">
                  <input
                    required=""
                    type="text"
                    id="name"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                <div className="wave-group">
                  <input
                    required=""
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <div className="wave-group">
                  <input
                    required=""
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    className="input"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <i className="fa-solid fa-phone label-char"></i>
                    <span className="label-char" style={{ "--index": 0 }}>
                      P
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
                <div className="wave-group">
                  <input
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required=""
                    type="text"
                    id="country"
                    className="input"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <i className="fa-solid fa-earth-americas label-char"></i>
                    <span className="label-char" style={{ "--index": 0 }}>
                      C
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      o
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      n
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      t
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      r
                    </span>
                    <span className="label-char" style={{ "--index": 5 }}>
                      y
                    </span>
                  </label>
                </div>
                <div className="wave-group">
                  <input
                    required=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    id="address"
                    className="input"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <i className="fa-solid fa-location-dot label-char"></i>
                    <span className="label-char" style={{ "--index": 0 }}>
                      A
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      d
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      d
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      r
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 5 }}>
                      s
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  name=""
                  id="join-us-btn"
                  className="btm_send"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 join_right p-4">
            <h6 data-aos-delay="0" className="font-reto">
              <FormattedMessage id="inquiries" />
            </h6>
            <h2 data-aos-delay="100">
              <FormattedMessage id="for-all-inquiries" />
            </h2>
            <p data-aos-delay="200">
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
      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps() {
  try {
    const franchisesOverview = await axios.get(
      "/core/page/franchises-overview"
    );
    const franchisesModels = await axios.get("/core/franchise-models");
    const faqs = await axios.get("/core/faqs");
    const franchisesApplyContent = await axios.get(
      "/core/page/franchises-apply-content"
    );
    const settings = await axios.get("/core/settings");
    return {
      props: {
        data: {
          franchisesOverview: franchisesOverview?.data?.data?.html,
          franchisesApplyContent: franchisesApplyContent?.data?.data?.html,
          faqs: faqs?.data?.data,
          franchisesModels: franchisesModels?.data?.data,
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
