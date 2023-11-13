import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "../../common/axios";

const page = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
      easing: "ease-in-out", // تعيين التموج (التنوع) للانتقال
    });
  }, []);
  let { about, aboutCity, partners } = data;
  return (
    <>
      <section className="home about-us">
        <Navbar />
        {/* <!-- home img --> */}
        <div dangerouslySetInnerHTML={{ __html: about }}></div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: aboutCity }}></div>
      <div dangerouslySetInnerHTML={{ __html: partners }}></div>

      <Footer />
    </>
  );
};

export default page;

export async function getServerSideProps() {
  try {
    const about = await axios.get("/core/page/about-us");
    const aboutCity = await axios.get("/core/page/about-us-city	");
    const partners = await axios.get("/core/page/home-partners");
    return {
      props: {
        data: {
          about: about?.data?.data?.html,
          aboutCity: aboutCity?.data?.data?.html,
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
