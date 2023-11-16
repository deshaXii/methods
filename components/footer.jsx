import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "../common/axios";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const footer = () => {
  let [email, setEmail] = useState("");
  let [settings, setSettings] = useState("");
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
        if (res.data?.status) {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
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
  const { locale } = useRouter();
  const getSettings = async () => {
    const headers = { "Accept-Language": locale };
    const settingsData = await axios.get(
      "https://methods-backend.puiux.org/api/core/settings",
      {
        headers,
      }
    );
    const { data } = settingsData;
    console.log(data);
    setSettings(data.data);
  };
  useEffect(async () => {
    await getSettings();
  }, []);

  return (
    <>
      {settings && (
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
                  {locale === "ar"
                    ? settings.footer_description_ar
                    : settings.footer_description_en}
                </p>
                <div className="d-flex  align-items-center">
                  {settings.instagram && (
                    <Link href={settings.instagram}>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  )}
                  {settings.whatsapp && (
                    <Link
                      href={`https://api.whatsapp.com/send?phone=${settings.whatsapp}`}
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </Link>
                  )}
                  {settings.twitter && (
                    <Link href={settings.twitter}>
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  )}
                  {settings.linkedin && (
                    <Link href={settings.linkedin}>
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  )}
                  {settings.youtube && (
                    <Link href={settings.youtube}>
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  )}
                  {settings.snapchat && (
                    <Link href={settings.snapchat}>
                      <i className="fa-brands fa-snapchat"></i>
                    </Link>
                  )}
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
                <h5>
                  <FormattedMessage id="contact-us" />
                </h5>
                <div className="icon-shoial-footer-div">
                  {settings.location && (
                    <Link
                      href={settings.location_url}
                      className="icon-shoial-footer"
                    >
                      <a>
                        <i className="fa-solid fa-location-dot"></i>
                        {settings.location}
                      </a>
                    </Link>
                  )}
                  {settings.email && (
                    <Link
                      href={`mailto:${settings.email}`}
                      className="icon-shoial-footer"
                    >
                      <a>
                        <i className="fa-solid fa-envelope"></i>
                        {settings.email}
                      </a>
                    </Link>
                  )}
                  {settings.mobile && (
                    <Link
                      href={`tel:+${settings.mobile}`}
                      className="icon-shoial-footer"
                    >
                      <a>
                        <i className="fa-solid fa-phone"></i>
                        {settings.mobile}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="foot_puiux d-flex justify-content-between w-100">
              <p>
                <FormattedMessage id="copyright" /> <span>methods</span> - 2023.
              </p>
              <Link href="https://puiux.com/">
                <a target="_blank">
                  <img src="./img/puiux.png" alt="" loading="lazy" />
                </a>
              </Link>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default footer;
