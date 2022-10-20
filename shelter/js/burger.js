const BURGER = document.querySelector(".hamburger");
const BURGER_OVERLAY = document.querySelector(".burger-overlay");
const BACKGROUND_OVERLAY = document.querySelector(".background-overlay");

const clickToBurgerFirst = () => {
  BURGER.style.transform = "rotate(90deg)";
  BURGER_OVERLAY.classList.add("transition-burger");
  BURGER.removeEventListener("click", clickToBurgerFirst);
  document.body.style.overflow = "hidden";
  BACKGROUND_OVERLAY.classList.add("background-overlay_appear");
  BACKGROUND_OVERLAY.addEventListener("click", removeBurgerMenu);
};

const clickToBurgerSecond = () => {
  BURGER.style.transform = "";
  BURGER_OVERLAY.classList.add("return-burger");
  BURGER.removeEventListener("click", clickToBurgerSecond);
  document.body.style.overflow = "";
  BACKGROUND_OVERLAY.classList.remove("background-overlay_appear");
};

const removeBurgerMenu = (e) => {
  console.log(e.target.className);
  if (
    e.target.className == "background-overlay background-overlay_appear" ||
    e.target.className == "background-overlay main background-overlay_appear" ||
    e.target.className == "navigation__li"
  ) {
    clickToBurgerSecond();
    BACKGROUND_OVERLAY.removeEventListener("click", removeBurgerMenu);
  }
};

BURGER.addEventListener("click", clickToBurgerFirst);

BURGER_OVERLAY.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName == "move-burger") {
    BURGER_OVERLAY.classList.remove("transition-burger");
    BURGER_OVERLAY.classList.remove("burger-overlay_hide");
    BURGER_OVERLAY.classList.add("burger-overlay_appear");
    BURGER.addEventListener("click", clickToBurgerSecond);
  }
});

BURGER_OVERLAY.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName == "return-burger") {
    BURGER_OVERLAY.classList.remove("return-burger");
    BURGER_OVERLAY.classList.remove("burger-overlay_appear");
    BURGER_OVERLAY.classList.add("burger-overlay_hide");
    BURGER.addEventListener("click", clickToBurgerFirst);
  }
});
