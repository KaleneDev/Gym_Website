import React from "react";
import "../../style/components/WhyChooseUs.scss";
const WhyChoiseUs = () => {
    return (
        <section className="wrapper-choose max-width-1400px">
            <div className="container-choose">
                <div className="container-choose__left">
                    <img
                        className="container-choose__left__image-1"
                        src="./assets/image1.png"
                        alt=""
                    />
                    <img
                        className="container-choose__left__image-2"
                        src="./assets/image2.png"
                        alt=""
                    />
                    <img
                        className="container-choose__left__image-3"
                        src="./assets/image3.png"
                        alt=""
                    />
                    <img
                        className="container-choose__left__image-4"
                        src="./assets/image4.png"
                        alt=""
                    />
                </div>

                <div className="container-choose__right">
                    <div className="container-choose__right__title">
                        <div>
                            <span className="text-orange">SOME REASONS</span>
                        </div>
                        <div>
                            <span className="stroke-text">WHY</span> CHOOSE US ?
                        </div>
                    </div>
                    <div className="container-choose__right__details">
                        <div>
                            <img src="./assets/tick.png" alt="" />
                            OVER 140+ EXPERT COACHS
                        </div>
                        <div>
                            <img src="./assets/tick.png" alt="" />
                            TRAIN SMARTER AND FASTER THAN BEFORE
                        </div>
                        <div>
                            <img src="./assets/tick.png" alt="" />1 FREE PROGRAM
                            FOR NEW MEMBER
                        </div>
                        <div>
                            <img src="./assets/tick.png" alt="" />
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
