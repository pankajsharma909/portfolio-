document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const fadeInSections = document.querySelectorAll(".fade-in");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    window.addEventListener("scroll", function() {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    });

    // Trigger animations on load
    setTimeout(() => {
        fadeInSections.forEach(section => section.classList.add("show"));
    }, 500);
});
