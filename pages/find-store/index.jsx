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
          <p className="font-reto"> BRAND SUCCESS </p>
          <h2>Story Behind </h2>
        </div>
        <div className="container">
          <div className=" div_store  m_store row">
            <form action="" id="find-store">
              <div className="  col-md-6 col-12 d-flex align-items-center m-0">
                <div className="find-store-search">
                  <input
                    required=""
                    className="form-control"
                    placeholder="search ...."
                    type="text"
                  />
                  <button className="invite-btn  searsh_btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                  </button>
                </div>
              </div>
            </form>

            <div className="row div_store  align-items-center flex_direction_column map-links-list ">
              <div className="col-md-6  col-sm-12 d-flex justify_content_center justify-content-end align-items-center  ">
                <div id="store-result-list">
                  <div id="store-stores">
                    <ul>
                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>

                      <li data-mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg">
                        <div className="store-store-location">
                          <div>
                            <strong>
                              <a target="_blank" href="">
                                Kingdom Tower Branch - Riyadh
                              </a>
                            </strong>
                            <p className="store-street">
                              King Abdullah Rd, King Fahd
                            </p>

                            <p>Riyadh 12271</p>
                            <p className="store-country">Saudi Arabia</p>
                          </div>
                        </div>
                        <div className="store-direction-wrap">
                          0.2 km
                          <a
                            className="store-directions"
                            target="_blank"
                            href=""
                          >
                            {" "}
                            location
                            <i className="fa-solid fa-map-location"></i>
                          </a>
                        </div>
                        <a
                          className="store-directions pt-0"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          8 AM - 5 PM
                          <i className="fa-solid fa-clock"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="store-direction-details">
                    <ul></ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      style={{ height: "600px", width: " 100%" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37807927442!2d31.299578098686503!3d30.059482054984617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1696493449199!5m2!1sar!2seg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
