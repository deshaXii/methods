import React, { useEffect } from "react";

import AOS from "aos";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const page = ({ data }) => {
  let { newsEventsOne, newsEventsTwo, newsEventsThree } = data;
  useEffect(() => {
    // AOS.init({
    //   duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
    //   easing: "ease-in-out", // تعيين التموج (التنوع) للانتقال
    // });
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
              </h2>{" "}
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
        <div dangerouslySetInnerHTML={{ __html: newsEventsOne }}></div>

        <section className="car6 car8 mt-5">
          <h6 className=" pt-5 font-reto" data-aos="fade-right">
            CATERING SERVICES PARTICIPATIONS{" "}
          </h6>
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h2 data-aos="fade-right">Catering Services Participations </h2>
          </div>
          <div className="events-grid">
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (5).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (5).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (5).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: newsEventsTwo }}></div>

        <section className="car6 car8">
          <h6 data-aos="fade-right" className="font-reto">
            SPECIAL DAYS
          </h6>
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h2 data-aos="fade-right">Special Days .</h2>
          </div>
          <div className="events-grid">
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (3).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (3).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (3).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
          </div>
        </section>

        <div dangerouslySetInnerHTML={{ __html: newsEventsThree }}></div>

        <section className="car6 car8 mt-5">
          <h6 className="pt-5 font-reto" data-aos="fade-right">
            SOCIOL RESPONSIBILITY{" "}
          </h6>
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h2 data-aos="fade-right">Social Responsibility</h2>
          </div>
          <div className="events-grid">
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (7).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (7).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (7).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
          </div>
        </section>

        {/* <!--  --> */}
        <section className="car6 car8 mt-5">
          <h6 className="pt-5 font-reto" data-aos="fade-right">
            SPONSORSHIPS{" "}
          </h6>
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h2 data-aos="fade-right">Sponsorships</h2>
          </div>
          <div className="events-grid">
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (7).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
          </div>
        </section>

        <section className="car6 car8 mt-5">
          <h6 className=" pt-5 font-reto" data-aos="fade-right">
            NEWS
          </h6>
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h2 data-aos="fade-right">The News </h2>
          </div>
          <div className="events-grid">
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (2).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (2).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
            <Link href={"/events"}>
              <section
                data-aos="fade-up"
                data-aos-delay="0"
                className="hover01"
              >
                <figure>
                  <img src="./img/page8 (2).png" alt="" loading="lazy" />
                </figure>
                <h6>The Founding Day</h6>
                <p>
                  One of the existing branches of the Methods brand with a
                  distinctive view and a location close to Al Fanateer Beach and
                  the city center in the commercial area.
                </p>
              </section>
            </Link>
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
    const newsEventsOne = await axios.get("/core/page/news-events-section-one");
    const newsEventsTwo = await axios.get("/core/page/news-events-section-two");
    const newsEventsThree = await axios.get(
      "/core/page/news-events-section-three"
    );
    return {
      props: {
        data: {
          newsEventsOne: newsEventsOne?.data?.data?.html,
          newsEventsTwo: newsEventsTwo?.data?.data?.html,
          newsEventsThree: newsEventsThree?.data?.data?.html,
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
