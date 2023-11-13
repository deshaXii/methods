import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Image } from "antd";
import AOS from "aos";
import Default from "../layouts/default";
import Navbar from "../components/navbar";
import axios from "../common/axios";

const HomePage = ({ data }) => {
  const [activeTab, setActiveTab] = useState("photo");
  useEffect(() => {
    AOS.init({
      duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
      easing: "ease-in-out", // تعيين التموج (التنوع) للانتقال
    });
  }, []);
  let {
    banner,
    about,
    services,
    partners,
    dynamicProducts,
    productsInfo,
    statistics,
    timeLine,
    newsPhoto,
    newsVideo,
  } = data;
  const settings = {
    dots: false,
    infinite: false,
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
      <Default>
        {/*  section home  */}
        <section className="home">
          <Navbar />

          <div dangerouslySetInnerHTML={{ __html: banner }}></div>
          {/* <!-- A B O U T U S  --> */}
          <div dangerouslySetInnerHTML={{ __html: about }}></div>
        </section>

        {/*   Time Line   */}
        <div dangerouslySetInnerHTML={{ __html: timeLine }}></div>

        <div className="container">
          {/* num */}
          <div dangerouslySetInnerHTML={{ __html: statistics }}></div>

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

          <div dangerouslySetInnerHTML={{ __html: services }}></div>
          {/* <!-- N E W S  A N D E V E N T S --> */}

          <div className="news position-relative">
            <h6 className="text-center our_productsp font-reto">
              NEWS AND EVENTS
            </h6>
            <h2>News & Events</h2>
            <ul className="nav nav-tabs nav__tabs">
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab("photo")}
                  className={`nav-link ${
                    activeTab === "photo" ? "active" : ""
                  }`}
                  type="button"
                >
                  Photo
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab("video")}
                  className={`nav-link ${
                    activeTab === "video" ? "active" : ""
                  }`}
                  type="button"
                >
                  Video
                </button>
              </li>
            </ul>
            {activeTab === "photo" && (
              <div className={`tab-content`}>
                <div className="row  justify-content-center gap">
                  {newsPhoto.slice(0, 5).map((item, index) => (
                    <div
                      key={item.id}
                      className={`col-md-${
                        index === 0 || 1 ? "4 hv" : "12"
                      }  col-sm-12 hover01 news_img_padding`}
                      data-aos={
                        index === 0 || 1
                          ? "fade-up"
                          : index === 2
                          ? "fade-right"
                          : index === 3
                          ? "fade-left"
                          : ""
                      }
                      data-aos-delay={
                        index === 0 ? 100 : index === 1 ? 200 : ""
                      }
                    >
                      <Link href={`/news-events/${item.id}`}>
                        <figure>
                          <img
                            src="./img/waffles-with-chocolate-sauce-wooden-plate.png"
                            alt=""
                            loading="lazy"
                          />
                        </figure>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "video" && (
              <div className={`tab-content`}>
                <div className="row  justify-content-center pb-3 gap">
                  {newsVideo.slice(0, 5).map((item, index) => (
                    <div
                      className={`col-md-${
                        item === 0 || 1 ? "6" : "12"
                      } news_img_padding col-sm-12 position-relative hv hover01`}
                      data-aos={`${
                        index === 0 || 2 || 4 ? "fade-right" : "fade-left"
                      }`}
                    >
                      <div>
                        <div className="position-relative">
                          <figure>
                            <img src="./img/DSC05559.png" alt="" />
                          </figure>
                          <div className="promo-video">
                            <div className="waves-block">
                              <div className="waves wave-1"></div>
                              <div className="waves wave-2"></div>
                              <div className="waves wave-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <section className="di_img position-absolute" id="di_img">
                        <div className="">
                          <h6>{item.title}</h6>
                          <p>{item.meta_description}</p>
                        </div>
                      </section>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <Link href={"/news-events"}>
              <a>
                <h5 data-aos="zoom-in" className="font-reto">
                  READ More
                  <i className="fa-solid fa-arrow-right"></i>
                </h5>
              </a>
            </Link>
          </div>
          <img
            src="./img/resha2.png"
            alt=""
            className="position-absolute  end-0 resha2"
            loading="lazy"
          />
        </div>
        {/* </div> */}

        <div dangerouslySetInnerHTML={{ __html: partners }}></div>
      </Default>
    </>
  );
};

export default HomePage;

export async function getServerSideProps() {
  try {
    const banner = await axios.get("/core/page/home-banner");
    const about = await axios.get("/core/page/home-about");
    const timeLine = await axios.get("/core/page/home-time-line");
    const statistics = await axios.get("/core/page/home-statistics");
    const productsInfo = await axios.get("/core/page/home-our-products");
    const dynamicProducts = await axios.get("/products?per_page=10");
    const newsVideo = await axios.get("/news?type=video&per_page=10");
    const newsPhoto = await axios.get("/news?type=photo&per_page=10");
    const services = await axios.get("/core/page/home-our-services");
    const partners = await axios.get("/core/page/home-partners");
    return {
      props: {
        data: {
          banner: banner?.data?.data?.html,
          about: about?.data?.data?.html,
          timeLine: timeLine?.data?.data?.html,
          statistics: statistics?.data?.data?.html,
          productsInfo: productsInfo?.data?.data?.html,
          dynamicProducts: dynamicProducts?.data?.data?.items,
          newsPhoto: newsPhoto?.data?.data?.items,
          newsVideo: newsVideo?.data?.data?.items,
          services: services?.data?.data?.html,
          partners: partners?.data?.data?.html,
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
