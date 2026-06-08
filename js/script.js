// =========================
// SCROLL ANIMATIONS
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll('.section').forEach(section => {

    observer.observe(section);

});

// =========================
// CAROUSEL
// =========================

const images = [
    "assets/images/image1.png",
    "assets/images/image2.png",
    "assets/images/image3.png",
    "assets/images/image4.png",
    "assets/images/image5.png"
];

const prevSlide = document.querySelector(".prev-slide img");
const activeSlide = document.querySelector(".active-slide img");
const nextSlide = document.querySelector(".next-slide img");

if (prevSlide && activeSlide && nextSlide) {

    let current = 1;

    function updateCarousel() {

        const prev =
            (current - 1 + images.length) % images.length;

        const next =
            (current + 1) % images.length;

        prevSlide.src = images[prev];
        activeSlide.src = images[current];
        nextSlide.src = images[next];

        const activeContainer =
            document.querySelector(".active-slide");

        if (activeContainer) {

            activeContainer.classList.add("animate");

            setTimeout(() => {

                activeContainer.classList.remove("animate");

            }, 800);

        }

    }

    function nextImage() {

        current++;

        if (current >= images.length) {

            current = 0;

        }

        updateCarousel();

    }

    function prevImage() {

        current--;

        if (current < 0) {

            current = images.length - 1;

        }

        updateCarousel();

    }

    let autoRotate = setInterval(nextImage, 5000);

    function resetTimer() {

        clearInterval(autoRotate);

        autoRotate = setInterval(nextImage, 5000);

    }

    const rightArrow =
        document.querySelector(".right-arrow");

    const leftArrow =
        document.querySelector(".left-arrow");

    if (rightArrow) {

        rightArrow.addEventListener("click", () => {

            nextImage();

            resetTimer();

        });

    }

    if (leftArrow) {

        leftArrow.addEventListener("click", () => {

            prevImage();

            resetTimer();

        });

    }

    updateCarousel();

}

// FEATURE BUTTONS 

const defaultImage =
    "assets/images/john-hamilton.png";

const buttons =
    document.querySelectorAll(".feature-btn");

const panel =
    document.getElementById("featurePanel");

const grid =
    document.getElementById("buttonGrid");

const title =
    document.getElementById("featureTitle");

const text =
    document.getElementById("featureText");

const link =
    document.getElementById("featureLink");

const image =
    document.getElementById("featureImage");

const close =
    document.getElementById("featureClose");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        panel.classList.add("active");

        const showcase =
            button.closest('.showcase');

        if (window.innerWidth <= 768) {

            setTimeout(() => {

                const showcaseTop =
                    showcase.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: showcaseTop - 80,
                    behavior: "smooth"
                });

            }, 350);

        }

        title.textContent =
            button.dataset.title;

        text.textContent =
            button.dataset.text;

        if (button.dataset.link) {

            link.href =
                button.dataset.link;

        }

        if (button.dataset.button) {

            link.textContent =
                button.dataset.button;

        }

        if (button.dataset.image) {

            image.style.opacity = 0;

            setTimeout(() => {

                image.src =
                    button.dataset.image;

                image.style.opacity = 1;

            }, 200);

        }

        grid.classList.add("hide");

        setTimeout(() => {

            panel.classList.add("active");

        }, 300);

    });

});

close.addEventListener("click", () => {

    panel.classList.remove("active");

    featureImage.style.opacity = 0;

    setTimeout(() => {

        featureImage.src = defaultImage;

        featureImage.style.opacity = 1;

        grid.classList.remove("hide");

    }, 300);

});

const scrollButton =
    document.getElementById("scrollDown");

const servicesSection =
    document.getElementById("services");

if (scrollButton && servicesSection) {

    scrollButton.addEventListener("click", () => {

        let offset;

        if (window.innerWidth <= 768) {

            offset = 80;

        } else {

            offset = 180;

        }

        window.scrollTo({
            top: servicesSection.offsetTop - offset,
            behavior: "smooth"
        });

    });

}

if (window.innerWidth <= 768) {

    const navbar = document.querySelector(".navbar");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {

            navbar.classList.remove("nav-hidden");
            return;

        }

        if (
            currentScroll > lastScroll &&
            currentScroll > 100
        ) {

            navbar.classList.add("nav-hidden");

        } else {

            navbar.classList.remove("nav-hidden");

        }

        lastScroll = currentScroll;

    });

}

let lastScrollTop = 0;

window.addEventListener("scroll", function () {

    if (window.innerWidth > 768) return;

    const navbar = document.querySelector(".navbar");

    let currentScroll =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    if (currentScroll <= 10) {

        navbar.style.transform = "translateY(0)";

    } else if (
        currentScroll > lastScrollTop + 10 &&
        currentScroll > 100
    ) {

        navbar.style.transform = "translateY(-100%)";

    } else if (
        currentScroll < lastScrollTop - 10
    ) {

        navbar.style.transform = "translateY(0)";

    }

    lastScrollTop = currentScroll;

});