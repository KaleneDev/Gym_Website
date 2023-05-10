import React from "react";
import Header from "../Header/Header";
import "../../style/components/Hero.scss";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-left">
            <Header />
            <div className="the-best-ad">
              <span className="text">
                <span>The best </span>fitness club in the town
              </span>
            </div>
            <div className="hero-text">
              <h1 className="stroke-text">
                <span>SHAPE</span> YOUR <br /> IDEAL BODY
              </h1>
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
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
              <button>Get Started</button>
              <button>Learn More</button>
            </div>
          </div>
          <div className="hero-right"> right side</div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
