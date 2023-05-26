import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import "../../style/components/Footer.scss";
const Footer = () => {
    return (
        <section className="innerWidth">
            <hr />
            <div className="footer__container max-width-1400px innerWidth">
                <div className="footer__logo-social">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                    <FontAwesomeIcon icon="fab fa-instagram" />
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Footer;
