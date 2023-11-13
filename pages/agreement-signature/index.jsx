"use client";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import { Image } from "antd";
import AOS from "aos";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
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

      <div className="container ">
        <section className="text-center Agreement pt-4 mt-4">
          <h6 data-aos="fade-up" data-aos-delay="0" className="font-reto">
            AGREEMENT SIGNATURE
          </h6>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Agreement Signature
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Lorem Ipsum is siimply dummmy texxt of the printingg andd
            typesetting industry. Lorem Ipsum haas beeen the industry's
            standdard dummmy texxt ever sinnce the 1500s, whenn ann unknown
            printer took a galley of typee and scrammbled it to make a type
            specimen book.
          </p>
        </section>
        <section className=" news position-relative Agreement_video">
          <div className="row  justify-content-center gap">
            <Image.PreviewGroup>
              <div
                className="col-md-4 hv col-sm-12 hover01 news_img_padding"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                {/* <Link href={"/news-events"}>  */}
                <figure>
                  <Image
                    // width={200}
                    alt=""
                    src={"https://i.ibb.co/mBXXypm/page8-5.png"}
                  />
                </figure>
                {/* </Link> */}
              </div>
              <div
                className="col-md-4 hv col-sm-12 hover01 news_img_padding"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* <Link href={"/news-events"}> */}
                <figure>
                  <Image
                    // width={200}
                    alt=""
                    src={"https://i.ibb.co/mBXXypm/page8-5.png"}
                  />
                </figure>
                {/* </Link> */}
              </div>
              <div
                className="col-md-4 hv col-sm-12 hover01 news_img_padding"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* <Link href={"/news-events"}> */}
                <figure>
                  <Image
                    alt=""
                    // width={200}
                    src={"https://i.ibb.co/y6KdfYX/1-1465726.png"}
                  />
                </figure>
                {/* </Link> */}
              </div>
              <div
                className="col-md-6 col-sm-12 position-relative news_img_padding hv hover01"
                data-aos="fade-right"
              >
                {/* <Link href={"/news-events"}>  */}
                <figure>
                  <Image
                    // width={"auto"}
                    alt=""
                    src={"https://i.ibb.co/y6KdfYX/1-1465726.png"}
                  />
                </figure>
                {/* </Link> */}
                <section className="di_img position-absolute">
                  <div className="">
                    <h6>demo title of the news of one or teo lines</h6>
                    <h6>Apr 17, 2023</h6>
                  </div>
                </section>
              </div>
              <div
                className="col-md-6 col-sm-12 position-relative hv hover01 news_img_padding"
                data-aos="fade-left"
              >
                {/* <Link href={"/news-events"}> */}
                <figure>
                  <Image
                    // width={200}
                    alt=""
                    src={"https://i.ibb.co/mBXXypm/page8-5.png"}
                  />
                </figure>
                {/* </Link> */}
                <section className="position-absolute di_img ">
                  <div className="">
                    <h6>demo title of the news of one or teo lines</h6>
                    <h6>Apr 17, 2023</h6>
                  </div>
                </section>
              </div>
            </Image.PreviewGroup>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;
