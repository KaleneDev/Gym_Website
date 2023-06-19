import { React } from "react";
import "../../style/components/WhyChooseUs.scss";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import {
    TextAnimationBtoT,
    SlideInFromLeft,
    SlideInFromTop,
    SlideInFromBot,
    SlideInFromRight,
} from "../../utils/AnimationText";

const WhyChoiseUs = () => {
    return (
        <section className="max-width-1400px innerWidth">
            <div className="container-choose">
                <div className="container-choose__left">
                    <SlideInFromLeft>
                        <img
                            className="container-choose__left__image-1"
                            src={image1}
                            alt=""
                        />
                    </SlideInFromLeft>

                    <SlideInFromTop>
                        <img
                            className="container-choose__left__image-2"
                            src={image2}
                            alt=""
                        />
                    </SlideInFromTop>
                    <SlideInFromBot>
                        <img
                            className="container-choose__left__image-3"
                            src={image3}
                            alt=""
                        />
                    </SlideInFromBot>
                    <SlideInFromRight>
                        <img
                            className="container-choose__left__image-4"
                            src={image4}
                            alt=""
                        />
                    </SlideInFromRight>
                </div>

                <div className="container-choose__right">
                    <div className="container-choose__right__title">
                        <TextAnimationBtoT animationDuration="0.5" delay="0">
                            <span className="text-orange">SOME REASONS</span>
                        </TextAnimationBtoT>

                        <TextAnimationBtoT animationDuration="0.5" delay="0.2">
                            <span>
                                <span className="stroke-text">WHY</span> CHOOSE
                                US ?
                            </span>
                        </TextAnimationBtoT>
                    </div>
                    <div className="container-choose__right__details">
                        <SlideInFromRight delay="0">
                            <div>
                                <img src={tick} alt="" />
                                OVER 140+ EXPERT COACHS
                            </div>
                        </SlideInFromRight>
                        <SlideInFromRight delay="0.1">
                            <div>
                                <img src={tick} alt="" />
                                TRAIN SMARTER AND FASTER THAN BEFORE
                            </div>
                        </SlideInFromRight>
                        <SlideInFromRight delay="0.2">
                            <div>
                                <img src={tick} alt="" />1 FREE PROGRAM FOR NEW
                                MEMBER
                            </div>
                        </SlideInFromRight>
                        <SlideInFromRight delay="0.3">
                            <div>
                                <img src={tick} alt="" />
                                RELIABLE PARTNERS
                            </div>
                        </SlideInFromRight>
                    </div>
                    <div className="container-choose__right__partners">
                        <SlideInFromRight>
                            <span>OUR PARTNERS</span>
                        </SlideInFromRight>
                        <SlideInFromRight>
                            <div className="container-choose__right__partners__logo">
                                <img src={nb} alt="" />
                                <img src={adidas} alt="" />
                                <img src={nike} alt="" />
                            </div>
                        </SlideInFromRight>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoiseUs;
