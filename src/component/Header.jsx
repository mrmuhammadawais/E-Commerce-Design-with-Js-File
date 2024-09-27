import React from "react";
import headerImg2 from "../images/headerImg2.jpg";
import "animate.css";
const Header = () => {
  return (
    <div className="header-container">
      <img
        src={headerImg2}
        alt="Ecommerce Store"
        className="header-image"
        style={{ eft: "23px", top: "23px" }}
      />
      <h1 className="header-heading animate__animated animate__fadeInDown">
        Welcome to Lit Unique
      </h1>
      <p className="header-paragraph animate__animated animate__fadeInUp animate__delay-1s">
        Discover the best products at unbeatable prices. Shop from a wide range
        of categories including electronics, fashion, goods, and more. Fast
        delivery and top-notch customer service are guaranteed. Start shopping
        today and experience a seamless online shopping journey.
      </p>
    </div>
  );
};

export default Header;
