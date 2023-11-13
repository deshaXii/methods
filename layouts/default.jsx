import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/footer.jsx";

function getDirection(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

const Default = ({ children, pageName, className }) => {
  const { locale } = useRouter();
  return (
    <div
      className={`${getDirection(locale)} ${className}`}
      dir={getDirection(locale)}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Default;
