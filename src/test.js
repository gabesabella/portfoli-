let slides = document.getElementsByTagName("article");
let activeIndex = 0;

function handleRightClick() {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-left";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

function handleLeftClick() {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  console.log(nextSlide);

  currentSlide.dataset.status = "before";

  nextSlide.dataset.status = "becoming-active-from-right";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const hamburgerCell = document.getElementById("mobile-nav-cell");
const hamburger = document.querySelector(".hamburger");
const b1 = document.getElementById("bar1");
const b2 = document.getElementById("bar2");
const b3 = document.getElementById("bar3");
const mobileNav = document.querySelector(".mobile-nav");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const socialSection = document.getElementById("nav-social-section");
let checked = false;

hamburgerCell.addEventListener("click", () => {
  checked = !checked;

  if (checked) {
    // turn into an X
    b1.classList.add("opacity-0");
    b2.classList.add("rotate-45", "translate-x-[1px]");
    b3.classList.add("-rotate-45", "-translate-y-[11px]");
    mobileNav.classList.remove("-translate-y-[100vh]");
    mobileNav.classList.add("smooth");
    hamburgerCell.style.borderLeft = "unset";
  } else {
    b1.classList.remove("opacity-0");
    b2.classList.remove("rotate-45", "translate-x-[1px]");
    b3.classList.remove("-rotate-45", "-translate-y-[11px]");
    mobileNav.classList.add("-translate-y-[100vh]");
    hamburgerCell.style.borderLeft = "1px solid hsl(0, 20%, 50%, 50%)";
  }
});
