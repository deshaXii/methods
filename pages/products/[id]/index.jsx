"use client";
import React, { Component, useEffect } from "react";
import AOS from "aos";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import axios from "../../../common/axios";
import { FormattedMessage } from "react-intl";

const page = ({ data }) => {
  let { productDetails } = data;
  console.log(productDetails);
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
                <img src="../../img/Group 5733.png" alt="" loading="lazy" />
              </div>
              <h2
                className="d-flex align-items-center writeit justify-content-center mt-2"
                data-aos="fade-up"
                data-aos-delay="100"
              ><FormattedMessage id="perfecting-your-way" />
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
      {/* <!-- Time Line --> */}

      <div className="container">
        <section
          className="  one_product row align-items-center  prodouct"
          dir="rtl"
        >
          <div
            className="col-sm-12 col-md-6 col-lg-6  rightt "
            data-aos="fade-right"
          >
            <div className="right">
              <div className="rating-box">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="name_pro">
                <h3> {productDetails.title} </h3>
                <h2>{productDetails.price} R.S</h2>
              </div>
            </div>

            <p>{productDetails.description}</p>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-6 left d-flex justify-content-end align-items-center login_card_div position-relative"
            data-aos="fade-left"
          >
            <div className="img_gal">
              <div className="main-img">
                <img
                  src={productDetails.thumbnail}
                  alt={`${productDetails.title} image`}
                  id="current"
                />
              </div>
            </div>
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
    const productDetails = await axios.get(`/products/show/${query.id}`, { headers });
    return {
      props: {
        data: {
          productDetails: productDetails?.data?.data,
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
