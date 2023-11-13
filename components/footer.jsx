import Link from "next/link";
import React, { useState } from "react";
import axios from "../common/axios";
import { FormattedMessage } from "react-intl";

const footer = () => {
  let [email, setEmail] = useState("");
  const SendNewsLettersRequest = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://methods-backend.puiux.org/api/forms/news-letter",
        {
          email,
        },
        {
          headers: {
            "Accept-Language": "ar",
          },
        }
      )
      .then((res) => {
        setEmail("");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const emailPlaceholder = <FormattedMessage id="email" />;

  return (
    <>
      <footer>
        <div className="container">
          <div className="login row flex-nowrap align-items-center">
            <section className="col-md-6" data-aos="fade-right">
              <h6 className="font-reto">
                <FormattedMessage id="subscribe" />
              </h6>
              <h2>
                <FormattedMessage id="subscribe-to" />
              </h2>
            </section>
            <section
              className="col-md-6 p-0 login_left d-flex justify-content-center align-items-center"
              data-aos="fade-left"
            >
              <form
                onSubmit={(e) => SendNewsLettersRequest(e)}
                id="searchBoxFooter"
              >
                <div className="searchBox">
                  <div>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <input
                    className="searchInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                  <button className="searchButton" name="" href="#">
                    <FormattedMessage id="send" />
                  </button>
                </div>
              </form>
            </section>
          </div>

          <div className="footer row ">
            <div
              className="foot col-md-3 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <img src="./img/logoo.png" alt="" loading="lazy" />
              <p>
                Michods Café For Specialty Coffee Was Opened In 2018 In Jubail
                Industrial City, And It Is Considered One Of The Unique Brands
                In Its Field.
              </p>
              <div className="d-flex  align-items-center">
                <i className="fa-brands fa-tiktok"></i>
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
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
            <div
              className="foot col-md-3 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h5>
                <FormattedMessage id="about-methods" />
              </h5>
              <Link href={"/"}>
                <a>
                  <p>
                    <FormattedMessage id="home" />
                  </p>
                </a>
              </Link>
              <Link href={"/about"}>
                <a>
                  <p>
                    <FormattedMessage id="about-us" />
                  </p>
                </a>
              </Link>
              <Link href={"/products"}>
                <a>
                  <p>
                    <FormattedMessage id="products" />{" "}
                  </p>
                </a>
              </Link>
              <Link href={"/news-events"}>
                <a>
                  <p>
                    <FormattedMessage id="news-events" />
                  </p>
                </a>
              </Link>
              <Link href={"/franchises"}>
                <a>
                  <p>
                    <FormattedMessage id="branches" />
                  </p>
                </a>
              </Link>
            </div>
            <div
              className="foot col-md-3 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h5>
                <FormattedMessage id="links-interset" />
              </h5>
              <Link href={"/franchises"}>
                <a>
                  <p>
                    <FormattedMessage id="franchises" />
                  </p>
                </a>
              </Link>
              <Link href={"/hiring"}>
                <a>
                  <p>
                    <FormattedMessage id="join-us" />
                  </p>
                </a>
              </Link>
              <Link href={"/contact-us"}>
                <a>
                  <p>
                    <FormattedMessage id="contact-us" />
                  </p>
                </a>
              </Link>
              <Link href={"/privacy"}>
                <a>
                  <p>
                    <FormattedMessage id="privacy" />
                  </p>
                </a>
              </Link>
              <Link href={"/terms"}>
                <a>
                  <p>
                    <FormattedMessage id="terms" />
                  </p>
                </a>
              </Link>
            </div>
            <div
              className="foot col-md-3 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h5>Contact Us</h5>
              <div className="icon-shoial-footer-div">
                <Link
                  href="https://www.google.com/maps/search/Saudi+Arabia,+Riyadh,+Al-Raed+District,+Abdulaziz+Al-Ahsa+Stree/@24.715572,46.6759627,17.94z?entry=ttu"
                  className="icon-shoial-footer"
                >
                  <a>
                    <i className="fa-solid fa-location-dot"></i>
                    Saudi Arabia, Riyadh, Al-Raed District, Abdulaziz Al-Ahsa
                    Stree
                  </a>
                </Link>
                <Link
                  href="mailto:methods@gmail.com"
                  className="icon-shoial-footer"
                >
                  <a>
                    <i className="fa-solid fa-envelope"></i>
                    methods@gmail.com
                  </a>
                </Link>
                <Link href="tel:+4733378901" className="icon-shoial-footer">
                  <a>
                    <i className="fa-solid fa-phone"></i>
                    0104586953
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="foot_puiux d-flex justify-content-between w-100">
            <p>
              <FormattedMessage id="copyright" /> <span>methods</span> - 2023.
            </p>
            <Link href="https://puiux.com/" target="_blank">
              <img src="./img/puiux.png" alt="" loading="lazy" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
