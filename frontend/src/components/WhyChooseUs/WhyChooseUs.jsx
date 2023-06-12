import { React, useEffect, useState } from "react";
import "../../style/components/WhyChooseUs.scss";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import { TextAnimationBtoT } from "../../utils/AnimationText";

const WhyChoiseUs = () => {
    return (
        <section className="max-width-1400px innerWidth">
            <div className="container-choose">
                <div className="container-choose__left">
                    <img
                        className="container-choose__left__image-1"
                        src={image1}
                        alt=""
                    />
                    <img
                        className="container-choose__left__image-2"
                        src={image2}
                        alt=""
                    />
                    <img
                        className="container-choose__left__image-3"
                        src={image3}
                        alt=""
                    />
                    <img
                        className="container-choose__left__image-4"
                        src={image4}
                        alt=""
                    />
                </div>

                <div className="container-choose__right">
                    <div className="container-choose__right__title">
                        <TextAnimationBtoT animationDuration="0.7" delay="0">
                            <span className="text-orange">SOME REASONS</span>
                        </TextAnimationBtoT>

                        <TextAnimationBtoT animationDuration="0.7" delay="0.5">
                            <span>
                                <span className="stroke-text">WHY</span> CHOOSE
                                US ?
                            </span>
                        </TextAnimationBtoT>
                    </div>
                    <div className="container-choose__right__details">
                        <div>
                            <img src={tick} alt="" />
                            OVER 140+ EXPERT COACHS
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            TRAIN SMARTER AND FASTER THAN BEFORE
                        </div>
                        <div>
                            <img src={tick} alt="" />1 FREE PROGRAM FOR NEW
                            MEMBER
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            RELIABLE PARTNERS
                        </div>
                    </div>
                    <div className="container-choose__right__partners">
                        <span>OUR PARTNERS</span>
                        <div className="container-choose__right__partners__logo">
                            <img src="./assets/nb.png" alt="" />
                            <img src="./assets/nike.png" alt="" />
                            <img src="./assets/adidas.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoiseUs;
