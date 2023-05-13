import React from "react";
import "../../style/components/Testimonials.scss";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
    return (
        <section>
            <div className="testimonials__container">
                <div className="testimonials__container__left">
                    <div>TESTIMONIALS</div>
                    <div className="stroke-text">WHAT THEY</div>
                    <div>SAY ABOUT US</div>
                    <div>{testimonialsData[0].review}</div>
                    <div>
                        <span>{testimonialsData[0].name}</span>
                        <span>{testimonialsData[0].status}</span>
                    </div>
                </div>
                <div className="testimonials__container__right">
                    <img src={testimonialsData[0].image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
