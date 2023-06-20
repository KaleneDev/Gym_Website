import { React, useEffect } from "react";

const TextAnimationBtoT = ({ children, duration, delay, scroll }) => {
    const className = `animationTextBotToTop `;
    const delays = delay || 0;
    const animationDurations = duration || 0.5;
    const ScrollTopAndBot = scroll || "off";

    useEffect(() => {
        const textElement = document.querySelectorAll(`.animationTextBotToTop`);

        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;

            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                let elementBot = element.getBoundingClientRect().bottom;
                const keyAnimationScroll = element.getAttribute("scroll");

                const textElementSpan = element.querySelectorAll("div > * ");

                textElementSpan.forEach((element) => {
                    // element.style.transform = "translateY(100%)";
                    element.style.top = element.offsetHeight + "px";
                    // element.style.opacity = 0;
                });
                animation(element.offsetHeight);
                function animation(top, duration) {
                    //Set the height
                    element.style.height = textElementSpan.offsetHeight + "px";
                    element.style.display = "inline-block";
                    element.style.overflow = "hidden";

                    //Set animation
                    textElementSpan.forEach((elementChild) => {
                        const keyAnimationDuration =
                            elementChild.parentNode.getAttribute("duration");

                        const keyAnimationDelay =
                            elementChild.parentNode.getAttribute("delay");

                        // elementChild.style.opacity = 1;
                        elementChild.style.position = "relative";
                        elementChild.style.transition = `top ${
                            keyAnimationDuration * duration
                        }s ease-in-out ${keyAnimationDelay}s`;
                        elementChild.style.top = top + "px";
                    });
                }
                if (keyAnimationScroll === "off") {
                    elementBot = 0;
                } else if (keyAnimationScroll === "on") {
                    elementBot = element.getBoundingClientRect().bottom;
                } else {
                    elementBot = 0;
                }
                if (elementTop > triggerBottom || elementBot < 0) {
                    animation(element.offsetHeight, 0.1);
                } else {
                    animation(0, 1);
                }
            });
        }
    }, []);

    return (
        <div
            className={className}
            duration={animationDurations}
            delay={delays}
            scroll={ScrollTopAndBot}
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
const SlideInFromRight = ({ children, duration, delay, scroll }) => {
    const className = `slideInFromRight`;
    const delays = delay || 0;
    const animationDurations = duration || 1;
    const ScrollTopAndBot = scroll || "off";

    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromRight`);

        textElement.forEach((element) => {
            // element.style.opacity = 0;
            // element.style.transform = "translateX(100%)";
            element.childNodes.forEach((child) => {
                child.style.opacity = 0;
                child.style.transform = "translateX(100%)";
            });
        });
        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;

            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                let elementBot = element.getBoundingClientRect().bottom;

                const keyAnimationDuration = element.getAttribute("duration");
                const keyAnimationDelay = element.getAttribute("delay");
                const keyAnimationScroll = element.getAttribute("scroll");

                function animation(opacity, transform, duration) {
                    element.childNodes.forEach((child) => {
                        if (child.tagName.toLowerCase() === "span") {
                            child.style.display = "inline-block";
                        }
                        child.style.opacity = opacity;
                        child.style.transition = `transform ${
                            keyAnimationDuration * duration
                        }s ease ${keyAnimationDelay}s, opacity ${
                            keyAnimationDuration * duration * 1.5
                        }s ease`;
                        child.style.transform = `translateX(${transform}%)`;
                    });
                }

                if (keyAnimationScroll === "off") {
                    elementBot = 0;
                } else if (keyAnimationScroll === "on") {
                    elementBot = element.getBoundingClientRect().bottom;
                } else {
                    elementBot = 0;
                }

                if (elementTop > triggerBottom || elementBot < 0) {
                    animation(0, 100, 0.1);
                } else {
                    animation(1, 0, 1);
                }
            });
        }
    }, []);
    return (
        <div
            className={className}
            duration={animationDurations}
            delay={delays}
            scroll={ScrollTopAndBot}
        >
            {children}
        </div>
    );
};
const SlideInFromLeft = ({ children, duration, delay, scroll }) => {
    const className = `slideInFromLeft`;
    const delays = delay || 0;
    const animationDurations = duration || 1;
    const ScrollTopAndBot = scroll || "off";

    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromLeft`);

        textElement.forEach((element) => {
            // element.style.opacity = 0;
            // element.style.transform = "translateX(-100%)";
            element.childNodes.forEach((child) => {
                child.style.opacity = 0;
                child.style.transform = "translateX(-100%)";
            });
        });
        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;
            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                let elementBot = element.getBoundingClientRect().bottom;
                const keyAnimationDuration = element.getAttribute("duration");
                const keyAnimationDelay = element.getAttribute("delay");
                const keyAnimationScroll = element.getAttribute("scroll");
                function animation(opacity, transform, duration) {
                    element.childNodes.forEach((child) => {
                        if (child.tagName.toLowerCase() === "span") {
                            child.style.display = "inline-block";
                        }
                        child.style.opacity = opacity;
                        child.style.transition = `transform ${
                            keyAnimationDuration * duration
                        }s ease, opacity ${
                            keyAnimationDuration * duration * 1.5
                        }s ease`;
                        child.style.animationDelay = `${keyAnimationDelay}s`;
                        child.style.transform = `translateX(${transform}%)`;
                    });
                }

                if (keyAnimationScroll === "off") {
                    elementBot = 0;
                } else if (keyAnimationScroll === "on") {
                    elementBot = element.getBoundingClientRect().bottom;
                } else {
                    elementBot = 0;
                }
                if (elementTop > triggerBottom || elementBot < 0) {
                    animation(0, -100, 0.1);
                } else {
                    animation(1, 0, 1);
                }
            });
        }
    }, []);

    return (
        <div
            className={className}
            duration={animationDurations}
            delay={delays}
            scroll={ScrollTopAndBot}
        >
            {children}
        </div>
    );
};
const SlideInFromTop = ({ children, duration, delay, scroll }) => {
    const className = `slideInFromTop`;
    const delays = delay || 0;
    const animationDurations = duration || 1;
    const ScrollTopAndBot = scroll || "off";
    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromTop`);

        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        textElement.forEach((element) => {
            // element.style.opacity = 0;
            // element.style.transform = "translateY(-50%)";
            element.childNodes.forEach((child) => {
                child.style.opacity = 0;
                child.style.transform = `translateY(-50%)`;
            });
        });
        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;
            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                let elementBot = element.getBoundingClientRect().bottom;

                const keyAnimationDuration = element.getAttribute("duration");
                const keyAnimationDelay = element.getAttribute("delay");
                const keyAnimationScroll = element.getAttribute("scroll");

                // function animationThreshold(opacity, transform) {
                //     const options = {
                //         threshold: 0.5, // 50% de visibilité requise pour déclencher l'événement
                //     };
                //     const observer = new IntersectionObserver(
                //         (entries, observer) => {
                //             entries.forEach((entry) => {
                //                 if (entry.isIntersecting) {
                //                     animation(1, 0, 1);
                //                     observer.unobserve(entry.target);
                //                 } else {
                //                     animation(0, -50, 0.5);
                //                 }
                //             });
                //         },
                //         options
                //     );
                //     observer.observe(element);
                // }
                function animation(opacity, transform, duration) {
                    element.childNodes.forEach((child) => {
                        if (child.tagName.toLowerCase() === "span") {
                            child.style.display = "inline-block";
                        }
                        child.style.opacity = opacity;
                        child.style.transition = `transform ${
                            keyAnimationDuration * duration
                        }s ease ${keyAnimationDelay}s, opacity ${
                            keyAnimationDuration * duration * 1.5
                        }s ease`;
                        child.style.transform = `translateY(${transform}%)`;
                    });
                }

                if (keyAnimationScroll === "off") {
                    elementBot = 0;
                } else if (keyAnimationScroll === "on") {
                    elementBot = element.getBoundingClientRect().bottom;
                } else {
                    elementBot = 0;
                }

                // Vérification si l'élément est sorti de la fenêtre
                if (elementTop > triggerBottom || elementBot < 0) {
                    // L'élément est sorti de la fenêtre vers le haut ou le bas
                    animation(0, -50, 0.1);
                } else {
                    // L'élément est dans la fenêtre
                    animation(1, 0, 1);
                }
            });
        }
    }, []);

    return (
        <div
            className={className}
            duration={animationDurations}
            delay={delays}
            scroll={ScrollTopAndBot}
        >
            {children}
        </div>
    );
};
const SlideInFromBot = ({ children, duration, delay, scroll }) => {
    const className = `slideInFromBot`;
    const delays = delay || 0;
    const animationDurations = duration || 1;
    const ScrollTopAndBot = scroll || "off";

    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromBot`);

        window.addEventListener("scroll", checkContent);
        window.addEventListener("load", checkContent);

        textElement.forEach((element) => {
            // element.style.opacity = 0;
            // element.style.transform = "translateY(50%)";
            element.childNodes.forEach((child) => {
                child.style.opacity = 0;
                child.style.transform = `translateY(50%)`;
            });
        });
        function checkContent() {
            const triggerBottom = (window.innerHeight / 5) * 4 + 150;
            textElement.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                let elementBot = element.getBoundingClientRect().bottom;
                const keyAnimationDuration = element.getAttribute("duration");
                const keyAnimationDelay = element.getAttribute("delay");
                const keyAnimationScroll = element.getAttribute("scroll");

                function animation(opacity, transform, duration) {
                    element.childNodes.forEach((child) => {
                        if (child.tagName.toLowerCase() === "span") {
                            child.style.display = "inline-block";
                        }
                        child.style.opacity = opacity;
                        child.style.transition = `transform ${
                            keyAnimationDuration * duration
                        }s ease ${keyAnimationDelay}s, opacity ${
                            keyAnimationDuration * duration * 1.5
                        }s ease`;
                        child.style.transform = `translateY(${transform}%)`;
                    });
                }
                if (keyAnimationScroll === "off") {
                    elementBot = 0;
                } else if (keyAnimationScroll === "on") {
                    elementBot = element.getBoundingClientRect().bottom;
                } else {
                    elementBot = 0;
                }
                // Vérification si l'élément est sorti de la fenêtre
                if (elementTop > triggerBottom || elementBot < 0) {
                    // L'élément est sorti de la fenêtre vers le haut ou le bas
                    animation(0, 50, 0.1);
                } else {
                    // L'élément est dans la fenêtre
                    animation(1, 0, 1);
                }
            });
        }
    }, []);

    return (
        <div
            className={className}
            duration={animationDurations}
            delay={delays}
            scroll={ScrollTopAndBot}
        >
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
