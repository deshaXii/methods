import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const page = () => {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [address, setAddress] = useState("");
  let [message, setMessage] = useState("");
  const { locale } = useRouter();
  let [country, setCountry] = useState("");
  let [subject, setSubject] = useState("");
  const headers = { "Accept-Language": locale };
  const sendContactRequest = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://methods-backend.puiux.org/api/forms/contact-us",
        {
          email,
          name,
          phone,
          address,
          message,
          country,
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
      {/* <!-- Time Line --> */}

      <div className="container ">
        <section className="carrd card_cont">
          <div className="cardd row align-items-center ">
            <div className="col-md-4 col-sm-12 card-content">
              <img src="./img/location (5).png" alt="" loading="lazy" />
              <h6>
                {" "}
                <FormattedMessage id="location" />{" "}
              </h6>
              <p className="p_colo_r p_colo_cont">
                Jubail City - the company's headquarters - King Faisal West
                Road. 6538
              </p>
            </div>
            <div className="col-md-4 col-sm-12 card-content">
              <img src="./img/send-mail.png" alt="" loading="lazy" />
              <h6>
                <FormattedMessage id="email" />
              </h6>
              <p className="p_colo_r p_colo_cont2">Rawan.Alyami@perpick.com</p>
            </div>
            <div className="col-md-4 col-sm-12 card-content">
              <img src="./img/Layer 16.png" alt="" loading="lazy" />
              <h6>
                <FormattedMessage id="social-media" />{" "}
              </h6>

              <div className="d-flex  align-items-center contact_icon">
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i>
                </a>

                <a href="#">
                  <svg
                    id="instagram_3_"
                    data-name="instagram (3)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.646"
                    height="13.646"
                    viewBox="0 0 13.646 13.646"
                  >
                    <g
                      id="Group_841"
                      data-name="Group 841"
                      transform="translate(10.458 2.525)"
                    >
                      <g id="Group_840" data-name="Group 840">
                        <path
                          id="Path_11806"
                          data-name="Path 11806"
                          d="M392.732,94.739a.331.331,0,1,0,.331.331A.332.332,0,0,0,392.732,94.739Z"
                          transform="translate(-392.401 -94.739)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_843"
                      data-name="Group 843"
                      transform="translate(3.886 3.886)"
                    >
                      <g id="Group_842" data-name="Group 842">
                        <path
                          id="Path_11807"
                          data-name="Path 11807"
                          d="M148.741,145.8a2.937,2.937,0,1,0,2.937,2.937A2.94,2.94,0,0,0,148.741,145.8Z"
                          transform="translate(-145.804 -145.804)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_845"
                      data-name="Group 845"
                      transform="translate(0)"
                    >
                      <g id="Group_844" data-name="Group 844">
                        <path
                          id="Path_11808"
                          data-name="Path 11808"
                          d="M9.9,0H3.741A3.745,3.745,0,0,0,0,3.741V9.9a3.745,3.745,0,0,0,3.741,3.741H9.9A3.745,3.745,0,0,0,13.646,9.9V3.741A3.745,3.745,0,0,0,9.9,0ZM6.823,10.565a3.743,3.743,0,1,1,3.743-3.743A3.747,3.747,0,0,1,6.823,10.565Zm3.967-6.572a1.137,1.137,0,1,1,1.137-1.137A1.138,1.138,0,0,1,10.789,3.993Z"
                          transform="translate(0)"
                        />
                      </g>
                    </g>
                  </svg>
                </a>

                <a href="#">
                  <svg
                    id="whatsapp_18_"
                    data-name="whatsapp (18)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.152"
                    height="15.151"
                    viewBox="0 0 15.152 15.151"
                  >
                    <g id="Group_5813" data-name="Group 5813">
                      <path
                        id="Path_31611"
                        data-name="Path 31611"
                        d="M7.578,0h0A7.571,7.571,0,0,0,1.442,12.016L.5,14.831,3.41,13.9A7.574,7.574,0,1,0,7.578,0Zm4.408,10.7A2.138,2.138,0,0,1,10.5,11.767c-.4.084-.913.152-2.653-.57A9.49,9.49,0,0,1,4.074,7.866a4.327,4.327,0,0,1-.9-2.285,2.419,2.419,0,0,1,.775-1.844,1.1,1.1,0,0,1,.775-.272c.094,0,.178,0,.254.009.223.009.334.023.481.374.183.44.628,1.527.681,1.639a.451.451,0,0,1,.032.41,1.309,1.309,0,0,1-.245.348c-.112.129-.218.227-.33.366-.1.12-.218.249-.089.472A6.724,6.724,0,0,0,6.737,8.609,5.57,5.57,0,0,0,8.513,9.7a.479.479,0,0,0,.534-.084,9.166,9.166,0,0,0,.592-.784.423.423,0,0,1,.544-.165c.2.071,1.287.606,1.509.717s.369.165.423.259A1.887,1.887,0,0,1,11.986,10.7Z"
                      />
                    </g>
                  </svg>
                </a>

                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about map7 join_col row align-items-center ">
          <div className="col-sm-12 col-md-6 card_join">
            <h2>
              <FormattedMessage id="contact-us" />
            </h2>
            <form onSubmit={(e) => sendContactRequest(e)} id="join-us-form">
              <div className="login_card">
                <div className="wave-group">
                  <input
                    required=""
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
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
                <div className="wave-group">
                  <input
                    required=""
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
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
                      N
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      u
                    </span>
                    <span className="label-char" style={{ "--index": 7 }}>
                      m
                    </span>
                    <span className="label-char" style={{ "--index": 8 }}>
                      b
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 10 }}>
                      r
                    </span>
                    <span className="label-char" style={{ "--index": 11 }}>
                      e
                    </span>
                  </label>
                </div>
                <div className="wave-group">
                  <input
                    required=""
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
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
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                <div className="wave-group">
                  <input
                    required=""
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="input"
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <i className="fa-solid fa-envelope label-char"></i>
                    <span className="label-char" style={{ "--index": 0 }}>
                      S
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      u
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      b
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      j
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 5 }}>
                      c
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      t
                    </span>
                    <span className="label-char m_n" style={{ "--index": 7 }}>
                      M
                    </span>
                    <span className="label-char" style={{ "--index": 8 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      s
                    </span>
                    <span className="label-char" style={{ "--index": 10 }}>
                      s
                    </span>
                    <span className="label-char" style={{ "--index": 11 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 12 }}>
                      g
                    </span>
                    <span className="label-char" style={{ "--index": 13 }}>
                      e
                    </span>
                  </label>
                </div>
                <div className="wave-group">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="  Message"
                    rows="3"
                    name="comment[text]"
                    cols="40"
                    className=" w-100"
                    autoComplete="off"
                    role="textbox"
                    aria-autocomplete="list"
                    aria-haspopup="true"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  name=""
                  id="join-us-btn"
                  className="btm_send"
                >
                  <FormattedMessage id="send" />
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 join_right p-4">
            <div className="mapp">
              <iframe
                width="100%"
                height="575"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* </div> */}
    </>
  );
};

export default page;
