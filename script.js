// =========================================
// KARYLLE'S PORTFOLIO
// =========================================



// =========================================
// HEADER SCROLL EFFECT
// =========================================

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



// =========================================
// SMOOTH SCROLL
// =========================================

const navLinks =
    document.querySelectorAll('a[href^="#"]');


navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) {

            return;

        }


        const target =
            document.querySelector(targetId);


        if (!target) {

            return;

        }


        event.preventDefault();


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});



// =========================================
// SCROLL REVEAL
// =========================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



// =========================================
// CUSTOM CURSOR
// =========================================

const cursorDot =
    document.querySelector(".cursor-dot");


const cursorRing =
    document.querySelector(".cursor-ring");


let mouseX = 0;

let mouseY = 0;

let ringX = 0;

let ringY = 0;



document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        cursorDot.style.left =
            `${mouseX}px`;

        cursorDot.style.top =
            `${mouseY}px`;

    }
);



function animateCursor() {

    ringX +=
        (mouseX - ringX) * 0.15;


    ringY +=
        (mouseY - ringY) * 0.15;


    cursorRing.style.left =
        `${ringX}px`;


    cursorRing.style.top =
        `${ringY}px`;


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();



// =========================================
// CURSOR HOVER STATES
// =========================================

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-image, .creative-image"
    );


interactiveElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursorRing.classList.add(
                "hover"
            );

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            cursorRing.classList.remove(
                "hover"
            );

        }
    );

});



// =========================================
// PROJECT IMAGE HOVER
// =========================================

const projectImages =
    document.querySelectorAll(
        ".project-image"
    );


projectImages.forEach(image => {

    image.addEventListener(
        "mouseenter",
        () => {

            image.classList.add(
                "hovered"
            );

        }
    );


    image.addEventListener(
        "mouseleave",
        () => {

            image.classList.remove(
                "hovered"
            );

        }
    );

});



// =========================================
// FOOTER YEAR
// =========================================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}



// =========================================
// LITTLE MASCOT INTERACTION
// =========================================

const mascot =
    document.querySelector(".hero-mascot");


if (mascot) {

    mascot.addEventListener(
        "click",
        () => {

            mascot.classList.add(
                "mascot-happy"
            );


            setTimeout(() => {

                mascot.classList.remove(
                    "mascot-happy"
                );

            }, 700);

        }
    );

}



// =========================================
// RANDOM LITTLE GREETING
// =========================================

const greetings = [

    "hello ☁",

    "you found me!",

    "hi there!",

    "welcome :)"

];


const heroIntro =
    document.querySelector(
        ".hero-intro"
    );


if (heroIntro) {

    heroIntro.addEventListener(
        "mouseenter",
        () => {

            const randomGreeting =
                greetings[
                    Math.floor(
                        Math.random() *
                        greetings.length
                    )
                ];


            heroIntro.textContent =
                randomGreeting;

        }
    );

}