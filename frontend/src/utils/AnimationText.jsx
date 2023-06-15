import { React, useEffect } from "react";

const TextAnimationBtoT = ({ children, animationDuration, delay }) => {
    const className = `animationTextBotToTop `;
    const delays = delay || 0;
    const animationDurations = animationDuration || 0.5;
    useEffect(() => {
        const textElement = document.querySelectorAll(`.animationTextBotToTop`);

        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);
        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;

            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBot = element.getBoundingClientRect().bottom;

                const textElementSpan = element.querySelectorAll("div > span");

                textElementSpan.forEach((elementChild) => {
                    elementChild.style.top = element.offsetHeight + "px";
                });
                animation(element.offsetHeight);
                function animation(top) {
                    //Set the height
                    element.style.height = textElementSpan.offsetHeight + "px";
                    element.style.display = "inline-block";
                    element.style.overflow = "hidden";

                    //Set animation
                    textElementSpan.forEach((elementChild) => {
                        const keyAnimationDuration =
                            elementChild.parentNode.getAttribute(
                                "animationDuration"
                            );

                        const keyAnimationDelay =
                            elementChild.parentNode.getAttribute("delay");

                        elementChild.style.position = "relative";
                        elementChild.style.transition = `top ${keyAnimationDuration}s ease-in-out ${keyAnimationDelay}s`;
                        elementChild.style.top = top + "px";
                    });
                }
                if (elementTop > triggerBottom || elementBot < 0) {
                    animation(element.offsetHeight);
                } else {
                    animation(0);
                }
            });
        }
    }, []);

    return (
        <div
            className={className}
            animationduration={animationDurations}
            delay={delays}
        >
            {children}
        </div>
    );
};
const FadeIn = ({ children, animationDuration }) => {
    // const className = `fadeIn`;
    // const animationDurations = animationDuration || 0.5;
    // useEffect(() => {
    //     const textElement = document.querySelectorAll(`.fadeIn`);
    //     textElement.forEach((element) => {
    //         element.style.opacity = 0;
    //         let currentTime = 0;
    //         const increment = 16; // Intervalle de temps entre chaque étape de l'animation (en millisecondes)
    //         const animate = () => {
    //             const keyAnimationDuration =
    //                 element.getAttribute("animationDuration") * 1000;
    //             currentTime += increment;
    //             const opacity = currentTime / keyAnimationDuration; // Calcule l'opacité en fonction du temps écoulé et de la durée totale
    //             element.style.opacity = opacity > 1 ? 1 : opacity; // Limite l'opacité à une valeur maximale de 1
    //             if (currentTime < keyAnimationDuration) {
    //                 // Vérifie si l'animation est terminée
    //                 requestAnimationFrame(animate); // Réexécute la fonction d'animation pour l'étape suivante
    //             }
    //         };
    //         animate();
    //     });
    // }, []);
    // return (
    //     <div className={className} animationduration={animationDurations}>
    //         {children}
    //     </div>
    // );
};
const SlideInFromRight = ({ children, animationDuration, delay }) => {
    const className = `slideInFromRight`;
    const delays = delay || 0;
    const animationDurations = animationDuration || 1;

    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromRight`);

        textElement.forEach((element) => {
            element.style.opacity = 0;
            element.style.transform = "translateX(100%)";
        });
        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;

            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBot = element.getBoundingClientRect().bottom;

                const keyAnimationDuration =
                    element.getAttribute("animationDuration");
                const keyAnimationDelay = element.getAttribute("delay");

                function animation(opacity, transform) {
                    element.style.opacity = opacity;
                    element.style.transition = `transform ${keyAnimationDuration}s ease ${keyAnimationDelay}s, opacity ${
                        keyAnimationDuration * 1.5
                    }s ease`;
                    element.style.transform = `translateX(${transform}%)`;
                }

                if (elementTop > triggerBottom || elementBot < 0) {
                    animation(0, 100);
                } else {
                    animation(1, 0);
                }
            });
        }
    }, []);
    return (
        <div
            className={className}
            animationduration={animationDurations}
            delay={delays}
        >
            {children}
        </div>
    );
};
const SlideInFromLeft = ({ children, animationDuration, delay }) => {
    const className = `slideInFromLeft`;
    const delays = delay || 0;
    const animationDurations = animationDuration || 1;

    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromLeft`);

        textElement.forEach((element) => {
            element.style.opacity = 0;
            element.style.transform = "translateX(-100%)";
        });
        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;
            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBot = element.getBoundingClientRect().bottom;
                const keyAnimationDuration =
                    element.getAttribute("animationDuration");
                const keyAnimationDelay = element.getAttribute("delay");

                function animation(opacity, transform) {
                    element.style.opacity = opacity;
                    element.style.transition = `transform ${keyAnimationDuration}s ease, opacity ${
                        keyAnimationDuration * 1.5
                    }s ease`;
                    element.style.animationDelay = `${keyAnimationDelay}s`;
                    element.style.transform = `translateX(${transform}%)`;
                }
                if (elementTop > triggerBottom || elementBot < 0) {
                    animation(0, -100);
                } else {
                    animation(1, 0);
                }
            });
        }
    }, []);

    return (
        <div
            className={className}
            animationduration={animationDurations}
            delay={delays}
        >
            {children}
        </div>
    );
};
const SlideInFromTop = ({ children, duration, delay }) => {
    const className = `slideInFromTop`;
    const delays = delay || 0;
    const animationDurations = duration || 1;
    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromTop`);

        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        textElement.forEach((element) => {
            element.style.opacity = 0;
            element.style.transform = "translateY(-50%)";
        });
        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;
            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBot = element.getBoundingClientRect().bottom;
                const keyAnimationDuration = element.getAttribute("duration");
                const keyAnimationDelay = element.getAttribute("delay");
                function animation(opacity, transform, delay) {
                    element.style.opacity = opacity;
                    element.style.transition = `transform ${
                        keyAnimationDuration * delay
                    }s ease ${keyAnimationDelay}s, opacity ${
                        keyAnimationDuration * delay
                    }s ease`;
                    element.style.transform = `translateY(${transform}%)`;
                }
                animation(0, -50);
                // Vérification si l'élément est sorti de la fenêtre
                if (elementTop > triggerBottom || elementBot < 0) {
                    // L'élément est sorti de la fenêtre vers le haut ou le bas
                    animation(0, -50, 0.5);
                } else {
                    // L'élément est dans la fenêtre
                    animation(1, 0, 1);
                }
            });
        }
    }, []);

    return (
        <div className={className} duration={animationDurations} delay={delays}>
            {children}
        </div>
    );
};
const SlideInFromBot = ({ children, duration, delay }) => {
    const className = `slideInFromBot`;
    const delays = delay || 0;
    const animationDurations = duration || 1;
    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromBot`);

        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        textElement.forEach((element) => {
            element.style.opacity = 0;
            element.style.transform = "translateY(50%)";
        });
        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;
            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBot = element.getBoundingClientRect().bottom;
                const keyAnimationDuration = element.getAttribute("duration");
                const keyAnimationDelay = element.getAttribute("delay");
                function animation(opacity, transform, delay) {
                    element.style.opacity = opacity;
                    element.style.transition = `transform ${
                        keyAnimationDuration * delay
                    }s ease ${keyAnimationDelay}s, opacity ${
                        keyAnimationDuration * delay
                    }s ease`;
                    element.style.transform = `translateY(${transform}%)`;
                }
                animation(0, 50);
                // Vérification si l'élément est sorti de la fenêtre
                if (elementTop > triggerBottom || elementBot < 0) {
                    // L'élément est sorti de la fenêtre vers le haut ou le bas
                    animation(0, 50, 0.5);
                } else {
                    // L'élément est dans la fenêtre
                    animation(1, 0, 1);
                }
            });
        }
    }, []);

    return (
        <div className={className} duration={animationDurations} delay={delays}>
            {children}
        </div>
    );
};
export {
    TextAnimationBtoT,
    FadeIn,
    SlideInFromRight,
    SlideInFromLeft,
    SlideInFromTop,
    SlideInFromBot,
};
