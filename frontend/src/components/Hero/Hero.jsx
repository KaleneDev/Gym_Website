import React from "react";
import Header from "../Header/Header";
import "../../style/components/Hero.scss";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

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
                            <span className="stroke-text">SHAPE</span> YOUR{" "}
                            <br /> IDEAL BODY
                        </h1>
                        <span>
                            In here we will help you to shape and build your
                            ideal body and live up your life to fullest
                        </span>
                    </div>
                    <div className="figures">
                        <div>
                            <span>+ 140</span>
                            <span>EXPERT COACHES</span>
                        </div>
                        <div>
                            <span>+ 978</span>
                            <span>MEMBERS JOINED</span>
                        </div>
                        <div>
                            <span>+ 50</span>
                            <span>FITNESS PROGRAMS</span>
                        </div>
                    </div>
                    <div className="button-hero">
                        <button className="button-fill">Get Started</button>
                        <button className="button-unfill">Learn More</button>
                    </div>
                </div>
                <div className="hero-right">
                    {" "}
                    <div className="container-image">
                        <img className="hero-image" src={heroImage} alt="" />
                        <img
                            className="hero-image-back"
                            src={heroImageBack}
                            alt=""
                        />
                    </div>
                    <div className="heart-container">
                        <img src={heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </div>
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
