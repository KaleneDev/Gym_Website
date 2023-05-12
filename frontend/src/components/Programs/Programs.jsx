import React from "react";
import "../../style/components/Programs.scss";
import { programsData } from "../../data/programsData";
const Programs = () => {
    console.log(programsData);
    return (
        <section className="programs-wrapper max-width-1400px">
            <div className="programs-container">
                <div className="title-programs">
                    <span className="stroke-text">EXPLORE OUR</span>
                    <span>PROGRAMS</span>
                    <span className="stroke-text">TO SHARE YOU</span>
                </div>
                <div className="programs-card-container">
                    {programsData.map((program, key) => (
                        <div key={key} className="programs-card">
                            {program.image}
                            <span className="title">{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="join-now">
                                <span>Join now</span>
                                <img src="./assets/rightArrow.png" alt="" />
                            </div>
                        </div>
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
