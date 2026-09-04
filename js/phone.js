document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Drawer Toggle
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navMenu = document.querySelector("header nav");
    const navLinks = document.querySelectorAll("header nav ul li a");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav-active");
            
            // Toggle menu icon between bars and X
            const icon = mobileToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
                navMenu.classList.remove("nav-active");
                const icon = mobileToggle.querySelector("i");
                if (icon && icon.classList.contains("fa-xmark")) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

        // Close menu on link selection
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("nav-active");
                const icon = mobileToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }

    // 2. Preloader Hiding Logic
    const loader = document.querySelector(".loader");
    if (loader) {
        window.addEventListener("load", () => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        });
    }

    // 3. Header Scroll Shadow Effect
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });
});