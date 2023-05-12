import { useRef, useEffect } from "react";
import "../../style/components/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import test from "../../utils/OutSideClick";
import { test2, test } from "../../utils/OutSideClick";
library.add(faBars, faXmark);
const Header = () => {
  const navRef = useRef(null);
  const close = useRef();
  const burger = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    close.current.classList.toggle("responsive_nav");
    burger.current.classList.toggle("responsive_nav");
  };
  function useOutsideAlerter(ref, refBurger) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          [
            ref.current &&
              refBurger.current &&
              !ref.current.contains(event.target) &&
              !refBurger.current.contains(event.target),
          ] &&
          ref.current.className == "header-menu responsive_nav"
        ) {
          console.log(ref.current.className);
          showNavbar();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(navRef, burger);
  return (
    <section className="header-wrapper">
      <div className="container-header">
        <div className="logo-container">
          <img src="./assets/logo.png" alt="" className="logo" />
          <FontAwesomeIcon
            ref={burger}
            icon="fa-solid fa-bars"
            onClick={showNavbar}
            className="nav-btn"
          />
          <FontAwesomeIcon
            ref={close}
            icon="fa-solid fa-xmark"
            onClick={showNavbar}
            className="nav-btn btn-close"
          />
        </div>
        <div ref={navRef} className="header-menu">
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
