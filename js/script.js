/* =====================================================
   MOBILE NAVIGATION
   ===================================================== */

// Get the menu button
const menuToggle = document.getElementById("menuToggle");

// Get the navigation menu
const navMenu = document.getElementById("navMenu");


// When the menu button is clicked...
if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        // Add/remove the "show" class
        navMenu.classList.toggle("show");

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ===================================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =====================================================
   SCROLL REVEAL ANIMATION
   ===================================================== */

// Find all elements that should animate
const revealElements = document.querySelectorAll(".reveal");


/*
    IntersectionObserver watches elements as they
    enter the user's screen.
*/

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            // If element is visible...
            if (entry.isIntersecting) {

                // Add the show class
                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Start watching every reveal element
revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   MOUSE GLOW EFFECT
   ===================================================== */

/*
    This creates a subtle blue glow that follows
    the user's mouse.

    We only enable it on larger screens.
*/

if (window.innerWidth > 900) {

    const mouseGlow = document.createElement("div");

    mouseGlow.style.position = "fixed";
    mouseGlow.style.width = "300px";
    mouseGlow.style.height = "300px";
    mouseGlow.style.borderRadius = "50%";
    mouseGlow.style.pointerEvents = "none";
    mouseGlow.style.background =
        "rgba(23, 105, 255, 0.08)";
    mouseGlow.style.filter = "blur(80px)";
    mouseGlow.style.transform = "translate(-50%, -50%)";
    mouseGlow.style.zIndex = "-1";

    document.body.appendChild(mouseGlow);


    // Move the glow whenever the mouse moves

    document.addEventListener("mousemove", (event) => {

        mouseGlow.style.left = event.clientX + "px";

        mouseGlow.style.top = event.clientY + "px";

    });

}


/* =====================================================
   CONTACT FORM
   ===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        /*
            Prevent the browser from actually submitting
            the form because we don't have a backend yet.
        */

        event.preventDefault();


        // Show success message

        formMessage.textContent =
            "Message ready to send! Connect this form to a backend or email service.";


        // Clear the form

        contactForm.reset();

    });

}


/* =====================================================
   PROJECT IMAGE PARALLAX EFFECT
   ===================================================== */

/*
    Adds a small movement effect to project images
    when the user moves the mouse over them.
*/

const projectImages =
    document.querySelectorAll(".project-image");


projectImages.forEach(image => {

    image.addEventListener("mousemove", (event) => {

        const rect =
            image.getBoundingClientRect();


        // Calculate mouse position inside the image

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        // Convert the position to a rotation

        const rotateX =
            ((y / rect.height) - 0.5) * -5;

        const rotateY =
            ((x / rect.width) - 0.5) * 5;


        image.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    // Reset when mouse leaves

    image.addEventListener("mouseleave", () => {

        image.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});