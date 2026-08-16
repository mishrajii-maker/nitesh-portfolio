const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

// Menu ke kisi option par click karne ke baad menu close
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});

// contact section form//
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        emailjs.sendForm(
            "service_kfgzgw2",
            "template_m1cvojq",
            contactForm
        )
        .then(function () {

            contactStatus.textContent =
                "Message sent successfully! I'll get back to you soon.";

            contactStatus.style.color = "#6ee7ff";

            contactForm.reset();

            submitButton.disabled = false;
            submitButton.textContent = "Send Message ↗";

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            contactStatus.textContent =
                "Something went wrong. Please try again.";

            contactStatus.style.color = "#ff7b9c";

            submitButton.disabled = false;
            submitButton.textContent = "Send Message ↗";

        });

    });

}