import { React, useState } from "react";
import "../../style/components/Testimonials.scss";
import { testimonialsData } from "../../data/testimonialsData";
const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <section className="max-width-1400px innerWidth">
            <div className="testimonials__container">
                <div className="testimonials__container__left">
                    <div>TESTIMONIALS</div>
                    <div className="stroke-text">WHAT THEY</div>
                    <div>SAY ABOUT US</div>
                    <div>{testimonialsData[selected].review}</div>
                    <div>
                        <span className="testimonials__name">
                            {testimonialsData[selected].name}
                        </span>
                        <span> - </span>
                        <span className="testimonials__status">
                            {testimonialsData[selected].status}
                        </span>
                    </div>
                </div>
                <div className="testimonials__container__right">
                    <div className="testimonials__container__image">
                        <div></div>
                        <div></div>
                        <img src={testimonialsData[selected].image} alt="" />
                    </div>
                    <div className="testimonials__container__arrows">
                        <svg
                            onClick={() => {
                                setSelected(
                                    selected ? selected - 1 : tLength - 1
                                );
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6 arrow-left"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                            />
                        </svg>

                        <svg
                            onClick={() => {
                                setSelected((selected + 1) % tLength);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6 arrow-right"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;