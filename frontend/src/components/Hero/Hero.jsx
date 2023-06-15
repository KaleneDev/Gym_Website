import React from "react";
import Header from "../Header/Header";
import "../../style/components/Hero.scss";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import {
    TextAnimationBtoT,
    SlideInFromRight,
    SlideInFromLeft,
} from "../../utils/AnimationText";

const Hero = () => {
    return (
        <section className="hero-wrapper max-width-1400px innerWidth">
            <div className="hero-container">
                <div className="hero-left">
                    <Header />
                    <div className="the-best-ad">
                        <div></div>
                        <span className="text">
                            The best fitness club in the town
                        </span>
                    </div>
                    <div className="hero-text">
                        <h1 className="stroke-text-container">
                            <div className="hero__shapeYour">
                                <TextAnimationBtoT
                                    animationDuration="0.5"
                                    delay="0"
                                >
                                    <span>
                                        <span className="stroke-text">
                                            SHAPE{" "}
                                        </span>
                                        YOUR
                                    </span>
                                </TextAnimationBtoT>
                            </div>

                            <div className="hero__idealBody">
                                <TextAnimationBtoT
                                    animationDuration="0.5"
                                    delay="0.35"
                                >
                                    <span>IDEAL BODY</span>
                                </TextAnimationBtoT>
                            </div>
                        </h1>
                        <TextAnimationBtoT animationDuration="1" delay="0.4">
                            <span>
                                In here we will help you to shape and build your
                                ideal body and live up your life to fullest
                            </span>
                        </TextAnimationBtoT>
                    </div>
                    <div className="figures">
                        <SlideInFromRight animationDuration="1">
                            <span>+ 140</span>
                            <span>EXPERT COACHES</span>
                        </SlideInFromRight>

                        <SlideInFromRight animationDuration="1" delay="0.25">
                            <span>+ 978</span>
                            <span>MEMBERS JOINED</span>
                        </SlideInFromRight>

                        <SlideInFromRight animationDuration="1" delay="0.5">
                            <span>+ 50</span>
                            <span>FITNESS PROGRAMS</span>
                        </SlideInFromRight>
                    </div>
                    <div className="button-hero">
                        <SlideInFromLeft>
                            <button className="button-fill">Get Started</button>
                        </SlideInFromLeft>

                        <SlideInFromRight>
                            <button className="button-unfill">
                                Learn More
                            </button>
                        </SlideInFromRight>
                    </div>
                </div>
                <div className="hero-right">
                    {" "}
                    <SlideInFromRight>
                        <div className="container-image">
                            <img
                                className="hero-image"
                                src={heroImage}
                                alt=""
                            />
                            <img
                                className="hero-image-back"
                                src={heroImageBack}
                                alt=""
                            />
                        </div>
                    </SlideInFromRight>
                    <SlideInFromLeft>

                        <div className="heart-container">
                            <img src={heart} alt="" />
                            <span>Heart Rate</span>
                            <span>116 bpm</span>
                        </div>
                    </SlideInFromLeft>
                    <div className="calories-container">
                        <div className="calories-container-image">
                            <img src={calories} alt="" />
                        </div>
                        <div>
                            <span>Calories burned</span>
                            <span>220 kcal</span>
                        </div>
                    </div>
                    <div className="calories-burned-container"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
