"use client";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import Link from "next/link";
import AOS from "aos";
import { FormattedMessage } from "react-intl";

const page = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
      easing: "ease-in-out", // تعيين التموج (التنوع) للانتقال
    });
  }, []);
  let { productsInfo, dynamicProducts } = data;
  const settings = {
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
      {/* <!-- Time Line --> */}

      <div className="container">
        {/* <!-- mobile --> */}
        <img
          src="./img/logo-methods-back.png"
          alt=""
          className="logo-methods-back"
        />
        {/* <!-- OUR PRODUCTS --> */}
        <div dangerouslySetInnerHTML={{ __html: productsInfo }}></div>
        {/* <!--  --> */}

        <section className="caros mt-4">
          <Slider {...settings}>
            {dynamicProducts.map((item) => (
              <div key={item.id}>
                <Link href={`/products/${item.id}`}>
                  <a>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="700"
                      className="product-card-content"
                    >
                      <img
                        src={item.thumbnail}
                        alt={`${item.title} image`}
                        loading="lazy"
                      />
                      <h6>{item.title}</h6>
                      <p>{item.description}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </Slider>
        </section>
        {/* <!-- card --> */}
      </div>
      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps() {
  try {
    const productsInfo = await axios.get("/core/page/home-our-products");
    const dynamicProducts = await axios.get("/products?per_page=10");
    return {
      props: {
        data: {
          productsInfo: productsInfo?.data?.data?.html,
          dynamicProducts: dynamicProducts?.data?.data?.items,
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
