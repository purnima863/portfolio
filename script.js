//  
// Typing Effect
// 
const typingText = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "BCA Student",
    "Web Developer"
    
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// 
// Active Navbar
//

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});




function openExperience() {

    const modal = document.getElementById("experienceModal");

    if (modal) {

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

}


function closeExperience() {

    const modal = document.getElementById("experienceModal");

    if (modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

}


// 

const experienceModal =
    document.getElementById("experienceModal");

if (experienceModal) {

    experienceModal.addEventListener("click", function(event) {

        if (event.target === experienceModal) {

            closeExperience();

        }

    });

}


// 
// Scroll Reveal Animation
//

const revealElements = document.querySelectorAll(
    ".card, .left, .right, .edu, .skill, .contact, form, .experience-card"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0px)";

        }

    });

}

reveal();

window.addEventListener("scroll", reveal);


//
// Button Hover Effect
//

const buttons = document.querySelectorAll(".btn, button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// 
// Smooth Navbar Scroll Fix
//
document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        const header = document.querySelector("header");

        const headerHeight = header
            ? header.offsetHeight
            : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            10;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


console.log("Portfolio Loaded Successfully");
const contactForm = document.querySelector("#contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        alert("Your message has been sent successfully!");
    });
}
function openProject(title, image, tech, description, link) {

    document.getElementById("projectTitle").textContent = title;

    document.getElementById("projectImage").src = image;

    document.getElementById("projectTech").textContent = tech;

    document.getElementById("projectDescription").textContent = description;

    document.getElementById("projectLink").href = link;

    document.getElementById("projectModal").classList.add("active");
}


function closeProject() {

    document.getElementById("projectModal").classList.remove("active");
}


/* Popup ke bahar click karne par close */

document.getElementById("projectModal").addEventListener("click", function(e) {

    if (e.target === this) {
        closeProject();
    }

});