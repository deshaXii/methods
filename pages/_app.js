import React, { useEffect, useState } from "react";
import { wrapper } from "../store/index";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import "../public/css/style.css";

import ar from "../lang/ar.json";
import en from "../lang/en.json";
import Head from "next/head";
import Aos from "aos";

const messages = {
  ar,
  en,
};

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();
  useEffect(() => {
    let html = document.querySelector("html");
    html.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, [locale]);

  useEffect(() => {
    let progressBar = document.querySelector(".progress-wrap");
    if (progressBar) {
      scrollToTop();
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  }, []);
  const [showNotification, setShowNotification] = useState(true);
  return (
    <>
      <Head>
        <title>Methods</title>
        <meta
          name="description"
          content="Michods Café For Specialty Coffee Was Opened In 2018 In Jubail 
  Industrial City, And It Is Considered One Of The Unique Brands 
  In Its Field, As It Always Aims To Advance In The World Of Coffee, 
  From The Kingdom Of Saudi Arabia To The Global Markets."
        />
      </Head>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale={defaultLocale}
      >
        <Component {...pageProps} />
      </IntlProvider>
      <ToastContainer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
