import React, { useEffect } from "react";

import AOS from "aos";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const page = ({ data }) => {
  let { newsEventsOne, newsEventsTwo, newsEventsThree, categories } = data;
  let posts = [];
  categories.map((cat) => {
    console.log(cat);
    cat.posts.map((item) => {
      return posts.push(item);
    });
  });
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
        <div dangerouslySetInnerHTML={{ __html: newsEventsOne }}></div>

        <section className="car6 car8 mt-5">
          <h6 className=" pt-5 font-reto" data-aos="fade-right">
            {categories[0].name}
          </h6>
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h2 data-aos="fade-right">{categories[0].name} </h2>
          </div>
          <div className="events-grid">
            {categories[0].posts.map((item) => (
              <Link href={`/news-events/${item.slug}`} key={item.id}>
                <a>
                  <section
                    data-aos="fade-up"
                    data-aos-delay="0"
                    className="hover01"
                  >
                    <figure>
                      <img src={item.image} alt="" loading="lazy" />
                    </figure>
                    <h6>{item.title}</h6>
                    <p>{item.meta_description}</p>
                  </section>
                </a>
              </Link>
            ))}
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: newsEventsTwo }}></div>

        {categories[1] && (
          <section className="car6 car8">
            <h6 data-aos="fade-right" className="font-reto">
              {categories[1].name}
            </h6>
            <div className="d-flex justify-content-between align-items-center pb-4">
              <h2 data-aos="fade-right">{categories[1].name}</h2>
            </div>
            <div className="events-grid">
              {categories[1].posts.map((item) => (
                <Link href={`/news-events/${item.slug}`} key={item.id}>
                  <a>
                    <section
                      data-aos="fade-up"
                      data-aos-delay="0"
                      className="hover01"
                    >
                      <figure>
                        <img src={item.image} alt="" loading="lazy" />
                      </figure>
                      <h6>{item.title}</h6>
                      <p>{item.meta_description}</p>
                    </section>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div dangerouslySetInnerHTML={{ __html: newsEventsThree }}></div>

        <section className="car6 car8 mt-5">
          <h6 className=" pt-5 font-reto" data-aos="fade-right">
            <FormattedMessage id="news" />
          </h6>
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h2 data-aos="fade-right">
              <FormattedMessage id="news-events" />
            </h2>
          </div>
          <div className="events-grid">
            {posts.map((item) => (
              <Link href={`/news-events/${item.slug}`} key={item.id}>
                <a>
                  <section
                    data-aos="fade-up"
                    data-aos-delay="0"
                    className="hover01"
                  >
                    <figure>
                      <img src={item.image} alt="" loading="lazy" />
                    </figure>
                    <h6>{item.title}</h6>
                    <p>{item.meta_description}</p>
                  </section>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps({locale}) {
  try {
    const headers = { "Accept-Language": locale };
    const newsEventsOne = await axios.get("/core/page/news-events-section-one", { headers });
    const categories = await axios.get("/categories", { headers });
    const newsEventsTwo = await axios.get("/core/page/news-events-section-two", { headers });
    const newsEventsThree = await axios.get(
      "/core/page/news-events-section-three", { headers }
    );
    return {
      props: {
        data: {
          newsEventsOne: newsEventsOne?.data?.data?.html,
          newsEventsTwo: newsEventsTwo?.data?.data?.html,
          newsEventsThree: newsEventsThree?.data?.data?.html,
          categories: categories?.data?.data,
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
