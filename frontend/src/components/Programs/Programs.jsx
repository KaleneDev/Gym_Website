import React from "react";
import "../../style/components/Programs.scss";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";
import { SlideInFromTop } from "../../utils/AnimationText";

const Programs = () => {
    return (
        <section className="max-width-1400px innerWidth">
            <div className="programs-container">
                <div className="title-programs">
                    <SlideInFromTop scroll="off">
                        <span className="stroke-text">EXPLORE OUR</span>
                    </SlideInFromTop>
                    <SlideInFromTop scroll="off">
                        <span>PROGRAMS</span>
                    </SlideInFromTop>
                    <SlideInFromTop scroll="off">
                        <span className="stroke-text">TO SHARE YOU</span>
                    </SlideInFromTop>
                </div>

                <div className="programs-card-container">
                    {programsData.map((program, key) => (
                        <SlideInFromTop
                            delay={0}
                            duration="1"
                            scroll={"off"}
                            key={key}
                        >
                            <div className="programs-card">
                                {program.image}
                                <span className="title">{program.heading}</span>
                                <span>{program.details}</span>
                                <div className="join-now">
                                    <span>Join now</span>
                                    <img src={rightArrow} alt="" />
                                </div>
                            </div>
                        </SlideInFromTop>
                    ))}
                </div>

                {/* <div className="programs-card-container">
                    <div className="programs-card">
                        <img src="./assets/dumbell.svg" alt="" />

                        <span className="title">Strength Training</span>
                        <span>
                            In this program, you are trained to improve your
                            strength through many exercises.
                        </span>
                        <div className="join-now">
                            <span>Join now</span>
                            <img src="./assets/rightArrow.png" alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Programs;
