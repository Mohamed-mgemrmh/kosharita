// home page slider

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const nav = document.querySelector("header nav ul");
const navLinks = document.querySelectorAll("header nav ul li");

navLinks.forEach((navLink) => {
  navLink.addEventListener("mouseenter", () => {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLink.classList.add("active");
    const activeRect = navLink.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    nav.style.setProperty(
      "--before-right",
      `${(navRect.right - activeRect.right ) + 1}px`
    );
    nav.style.setProperty("--before-top", `${activeRect.top - navRect.top}px`);
  });
});

const visionImg = document.querySelector(".vision-container img");
let visionSection = document.querySelector("#vision");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let sectionOffset = visionSection.offsetTop;

  if (scrollPosition >= sectionOffset - 800) {
    let dynamicMarginTop = (scrollPosition - sectionOffset + 100) * 0.8;
    visionImg.style.cssText = `transform: translateY(${dynamicMarginTop}px)`;
  }
});

