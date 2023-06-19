import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import "../../style/components/Footer.scss";
import {
    TextAnimationBtoT,
    SlideInFromRight,
    SlideInFromLeft,
    SlideInFromTop,
} from "../../utils/AnimationText";
const Footer = () => {
    return (
        <section className="innerWidth">
            <hr />
            <div className="footer__container max-width-1400px innerWidth">
                <div className="footer__logo-social">
                    <SlideInFromRight>
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                    </SlideInFromRight>
                    <SlideInFromTop>
                        <FontAwesomeIcon icon="fab fa-instagram" />
                    </SlideInFromTop>
                    <SlideInFromLeft>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </SlideInFromLeft>
                </div>
                <TextAnimationBtoT>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </TextAnimationBtoT>
            </div>
        </section>
    );
};

export default Footer;
