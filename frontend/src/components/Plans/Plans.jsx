import React from "react";
import "../../style/components/Plans.scss";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
    return (
        <section>
            <div className="plans__container">
                <div className="plans__container__header">
                    <span className="stroke-text">READY TO START</span>
                    <span>YOUR JOURNEY</span>
                    <span className="stroke-text">NOW WITHUS</span>
                </div>
                <div className="plans__container__cards">
                    {plansData.map((plan, key) => (
                        <div
                            className="plans__container__cards__card"
                            key={key}
                        >
                            <div>{plan.icon}</div>
                            <div>{plan.name}</div>
                            <div>$ {plan.price}</div>
                            <div>
                                {plan.features.map((plan, key) => {
                                    return (
                                        <span key={key}>
                                            <img src={whiteTick} alt="" />{" "}
                                            {plan}
                                        </span>
                                    );
                                })}
                            </div>
                            <div>
                                <span>See more benefits</span>
                            </div>
                            <button className="button-fill">Join now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
