import React from "react";
import "../../style/components/Join.scss";
const Join = () => {
    return (
        <section className="max-width-1400px innerWidth">
            <div className="join__container">
                <div className="join__left">
                    <div className="join__left__block-left">
                        <h2>
                            <span className="stroke-text">READY TO</span> YOUR
                            BODY
                        </h2>
                        <h2>
                            LEVEL UP{" "}
                            <span className="stroke-text">WITH US ?</span>{" "}
                        </h2>
                    </div>
                    <div className="join__left__block-right">
                        <form action="" className="join__email__container">
                            <input
                                type="mail"
                                name="user_email"
                                placeholder="Enter your Email Address here..."
                            />
                            <button className="button-fill">Join now</button>
                        </form>
                    </div>
                </div>
                <div className="join__right"></div>
            </div>
        </section>
    );
};

export default Join;
