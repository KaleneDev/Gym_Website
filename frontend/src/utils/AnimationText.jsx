import { React, useEffect } from "react";

const TextAnimationBtoT = ({ children, animationDuration, delay }) => {
    const className = `animationTextBotToTop `;
    const delays = delay || 0;
    const animationDurations = animationDuration || 0.5;
    useEffect(() => {
        const textElement = document.querySelectorAll(`.animationTextBotToTop`);
        const styleSheet =
            document.styleSheets[0] ||
            document.head.appendChild(document.createElement("style")).sheet;

        const keyframesRule = "@keyframes fadein { to { top: 0; } }";
        if (styleSheet.insertRule) {
            // Pour les navigateurs compatibles avec la méthode insertRule
            styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);
        } else {
            // Pour les navigateurs compatibles avec la propriété addRule
            styleSheet.addRule("@keyframes fadein", "to { top: 0; }", -1);
        }

        textElement.forEach((element) => {
            const textElementSpan = element.querySelectorAll("div > span");

            //Set the height
            element.style.height = textElementSpan.offsetHeight + "px";
            element.style.display = "inline-block";
            element.style.overflow = "hidden";

            //Set animation
            textElementSpan.forEach((elementChild) => {
                const keyAnimationDuration =
                    elementChild.parentNode.getAttribute("animationDuration");

                const keyAnimationDelay =
                    elementChild.parentNode.getAttribute("delay");

                elementChild.style.position = "relative";
                elementChild.style.animation = `fadein ${keyAnimationDuration}s ease-in-out forwards`;
                elementChild.style.animationDelay = `${keyAnimationDelay}s`;
                elementChild.style.top = element.offsetHeight + "px";
            });
        });
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
    const className = `fadeIn`;
    const animationDurations = animationDuration || 0.5;

    useEffect(() => {
        const textElement = document.querySelectorAll(`.fadeIn`);

        textElement.forEach((element) => {
            element.style.opacity = 0;

            let currentTime = 0;
            const increment = 16; // Intervalle de temps entre chaque étape de l'animation (en millisecondes)

            const animate = () => {
                const keyAnimationDuration =
                    element.getAttribute("animationDuration") * 1000;
                currentTime += increment;
                const opacity = currentTime / keyAnimationDuration; // Calcule l'opacité en fonction du temps écoulé et de la durée totale

                element.style.opacity = opacity > 1 ? 1 : opacity; // Limite l'opacité à une valeur maximale de 1

                if (currentTime < keyAnimationDuration) {
                    // Vérifie si l'animation est terminée
                    requestAnimationFrame(animate); // Réexécute la fonction d'animation pour l'étape suivante
                }
            };
            animate();
        });
    }, []);
    return (
        <div className={className} animationduration={animationDurations}>
            {children}
        </div>
    );
};
const SlideInFromRight = ({ children, animationDuration, delay }) => {
    const className = `slideInFromRight`;
    const delays = delay || 0;
    const animationDurations = animationDuration || 1;

    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromRight`);
        const styleSheet =
            document.styleSheets[0] ||
            document.head.appendChild(document.createElement("style")).sheet;

        const keyframesRule = `
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0%);
          }
        }
      `;

        if (styleSheet.insertRule) {
            // Pour les navigateurs compatibles avec la méthode insertRule
            styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);
        } else {
            // Pour les navigateurs compatibles avec la propriété addRule
            styleSheet.addRule(
                `
    @keyframes slideInFromRight {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  `,
                -1
            );
        }
        textElement.forEach((element) => {
            element.style.opacity = 0;
            const keyAnimationDuration =
                element.getAttribute("animationDuration");
            const keyAnimationDelay = element.getAttribute("delay");
            console.log(keyAnimationDelay);
            element.style.animation = `slideInFromRight ${keyAnimationDuration}s ease-in-out forwards`;
            element.style.animationDelay = `${keyAnimationDelay}s`;
            element.style.transform = "translateX(100%)";
        });
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
        const styleSheet =
            document.styleSheets[0] ||
            document.head.appendChild(document.createElement("style")).sheet;

        const keyframesRule = `
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0%);
          }
        }
      `;

        if (styleSheet.insertRule) {
            // Pour les navigateurs compatibles avec la méthode insertRule
            styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);
        } else {
            // Pour les navigateurs compatibles avec la propriété addRule
            styleSheet.addRule(
                `
    @keyframes slideInFromLeft {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  `,
                -1
            );
        }
        textElement.forEach((element) => {
            element.style.opacity = 0;
            const keyAnimationDuration =
                element.getAttribute("animationDuration");
            const keyAnimationDelay = element.getAttribute("delay");
            console.log(keyAnimationDelay);
            element.style.animation = `slideInFromLeft ${keyAnimationDuration}s ease-in-out forwards`;
            element.style.animationDelay = `${keyAnimationDelay}s`;
            element.style.transform = "translateX(-100%)";
        });
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
const SlideInFromTop = ({ children, animationDuration, delay }) => {
    const className = `slideInFromTop`;
    const delays = delay || 0;
    const animationDurations = animationDuration || 1;

    useEffect(() => {
        const textElement = document.querySelectorAll(`.slideInFromTop`);
        const styleSheet =
            document.styleSheets[0] ||
            document.head.appendChild(document.createElement("style")).sheet;

        const keyframesRule = `
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0%);
          }
        }
      `;

        if (styleSheet.insertRule) {
            // Pour les navigateurs compatibles avec la méthode insertRule
            styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);
        } else {
            // Pour les navigateurs compatibles avec la propriété addRule
            styleSheet.addRule(
                `
    @keyframes slideInFromTop {
      0% {
        opacity: 0;
        transform: translateY(-100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  `,
                -1
            );
        }
        textElement.forEach((element) => {
            element.style.opacity = 0;
            const keyAnimationDuration =
                element.getAttribute("animationDuration");
            const keyAnimationDelay = element.getAttribute("delay");
            console.log(keyAnimationDelay);
            element.style.animation = `slideInFromTop ${keyAnimationDuration}s ease-in-out forwards`;
            element.style.animationDelay = `${keyAnimationDelay}s`;
            element.style.transform = "translateY(-100%)";
        });
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
export {
    TextAnimationBtoT,
    FadeIn,
    SlideInFromRight,
    SlideInFromLeft,
    SlideInFromTop,
};
