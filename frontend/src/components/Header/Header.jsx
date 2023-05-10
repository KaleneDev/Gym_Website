import React from "react";
import "../../style/components/Header.scss";
const Header = () => {
  return (
    <section className="header-wrapper">
      <div className="container-header">
        <img src="./assets/logo.png" alt="" className="logo" />
        <div className="header-menu">
          <div>Home</div>
          <div>Prolgrams</div>
          <div>Why us</div>
          <div>Plans</div>
          <div>Testimonials</div>
        </div>
      </div>
    </section>
  );
};

export default Header;
