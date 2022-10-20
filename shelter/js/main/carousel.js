// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Slider main page (>=1280px)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const BTN_LEFT = document.querySelector("#button_arrow_left");
const BTN_RIGHT = document.querySelector("#button_arrow_right");
const CAROUSEL = document.querySelector("#carousel");
const ITEMS_LEFT = document.querySelector("#items_left");
const ITEMS_RIGHT = document.querySelector("#items_right");

const CARD1 = document.querySelector("#card_katrine").innerHTML;
const CARD2 = document.querySelector("#card_jennifer").innerHTML;
const CARD3 = document.querySelector("#card_woody").innerHTML;
const CARD4 = document.querySelector("#card_4").innerHTML;
const CARD5 = document.querySelector("#card_5").innerHTML;
const CARD6 = document.querySelector("#card_6").innerHTML;
const CARD7 = document.querySelector("#card_7").innerHTML;
const CARD8 = document.querySelector("#card_8").innerHTML;
let PETS = [CARD1, CARD2, CARD3, CARD4, CARD5, CARD6, CARD7, CARD8];

const mediaQuery_desktop = window.matchMedia("(min-width: 1280px)");

if (mediaQuery_desktop.matches) {
  const moveLeft = () => {
    const activeCard1 = document.querySelectorAll(".card")[3].innerHTML;
    const activeCard2 = document.querySelectorAll(".card")[4].innerHTML;
    const activeCard3 = document.querySelectorAll(".card")[5].innerHTML;

    let i;
    i = PETS.indexOf(activeCard1);
    PETS.splice(i, 1);
    i = PETS.indexOf(activeCard2);
    PETS.splice(i, 1);
    i = PETS.indexOf(activeCard3);
    PETS.splice(i, 1);

    let card_1 = addElemCard();
    let card_2 = addElemCard();
    let card_3 = addElemCard();

    ITEMS_LEFT.innerHTML = "";
    ITEMS_LEFT.appendChild(card_1);
    ITEMS_LEFT.appendChild(card_2);
    ITEMS_LEFT.appendChild(card_3);

    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };

  const moveRight = () => {
    const activeCard1 = document.querySelectorAll(".card")[3].innerHTML;
    const activeCard2 = document.querySelectorAll(".card")[4].innerHTML;
    const activeCard3 = document.querySelectorAll(".card")[5].innerHTML;

    let i;
    i = PETS.indexOf(activeCard1);
    PETS.splice(i, 1);
    i = PETS.indexOf(activeCard2);
    PETS.splice(i, 1);
    i = PETS.indexOf(activeCard3);
    PETS.splice(i, 1);

    let card_1 = addElemCard();
    let card_2 = addElemCard();
    let card_3 = addElemCard();

    ITEMS_RIGHT.innerHTML = "";
    ITEMS_RIGHT.appendChild(card_1);
    ITEMS_RIGHT.appendChild(card_2);
    ITEMS_RIGHT.appendChild(card_3);

    CAROUSEL.classList.add("transition-right");
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
  };

  let count = 5;
  const addElemCard = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = PETS[Math.floor(Math.random() * count)];
    count--;
    i = PETS.indexOf(card.innerHTML);
    PETS.splice(i, 1);

    return card;
  };

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");

      const itemsLeft = ITEMS_LEFT.innerHTML;
      document.querySelector("#items_active").innerHTML = itemsLeft;

      PETS = [CARD1, CARD2, CARD3, CARD4, CARD5, CARD6, CARD7, CARD8];
      count = 5;
    } else {
      CAROUSEL.classList.remove("transition-right");

      const itemsRight = ITEMS_RIGHT.innerHTML;
      document.querySelector("#items_active").innerHTML = itemsRight;

      PETS = [CARD1, CARD2, CARD3, CARD4, CARD5, CARD6, CARD7, CARD8];
      count = 5;
    }
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    const activeCard1 =
      document.querySelectorAll(".card__pets-name")[3].innerHTML;
    const activeCard2 =
      document.querySelectorAll(".card__pets-name")[4].innerHTML;
    const activeCard3 =
      document.querySelectorAll(".card__pets-name")[5].innerHTML;
    document.querySelectorAll(".card")[3].classList.add(activeCard1);
    document.querySelectorAll(".card")[4].classList.add(activeCard2);
    document.querySelectorAll(".card")[5].classList.add(activeCard3);
  });
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Slider main page (768<=x<=1280px)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const mediaQuery_tablet = window.matchMedia(
  "(max-width: 1279px) and (min-width: 768px)"
);

if (mediaQuery_tablet.matches) {
  const hiddenCard = () => {
    document.querySelectorAll(".card")[8].classList.add("hidden");
    document.querySelectorAll(".card")[8].classList.remove("card");
    document.querySelectorAll(".card")[5].classList.add("hidden");
    document.querySelectorAll(".card")[5].classList.remove("card");
    document.querySelectorAll(".card")[2].classList.add("hidden");
    document.querySelectorAll(".card")[2].classList.remove("card");
  };

  document.addEventListener("DOMContentLoaded", hiddenCard);

  const moveLeft = () => {
    const activeCard1 = document.querySelectorAll(".card")[2].innerHTML;
    const activeCard2 = document.querySelectorAll(".card")[3].innerHTML;

    let i;
    i = PETS.indexOf(activeCard1);
    PETS.splice(i, 1);
    i = PETS.indexOf(activeCard2);
    PETS.splice(i, 1);

    let card_1 = addElemCard();
    let card_2 = addElemCard();

    ITEMS_LEFT.innerHTML = "";
    ITEMS_LEFT.appendChild(card_1);
    ITEMS_LEFT.appendChild(card_2);

    CAROUSEL.classList.add("transition-left_tablet");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };

  const moveRight = () => {
    const activeCard1 = document.querySelectorAll(".card")[2].innerHTML;
    const activeCard2 = document.querySelectorAll(".card")[3].innerHTML;

    let i;
    i = PETS.indexOf(activeCard1);
    PETS.splice(i, 1);
    i = PETS.indexOf(activeCard2);
    PETS.splice(i, 1);

    let card_1 = addElemCard();
    let card_2 = addElemCard();

    ITEMS_RIGHT.innerHTML = "";
    ITEMS_RIGHT.appendChild(card_1);
    ITEMS_RIGHT.appendChild(card_2);

    CAROUSEL.classList.add("transition-right_tablet");
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
  };

  let count = 6;
  const addElemCard = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = PETS[Math.floor(Math.random() * count)];
    count--;
    i = PETS.indexOf(card.innerHTML);
    PETS.splice(i, 1);

    return card;
  };

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left_tablet") {
      CAROUSEL.classList.remove("transition-left_tablet");

      const itemsLeft = ITEMS_LEFT.innerHTML;
      document.querySelector("#items_active").innerHTML = itemsLeft;

      PETS = [CARD1, CARD2, CARD3, CARD4, CARD5, CARD6, CARD7, CARD8];
      count = 6;
    } else {
      CAROUSEL.classList.remove("transition-right_tablet");

      const itemsRight = ITEMS_RIGHT.innerHTML;
      document.querySelector("#items_active").innerHTML = itemsRight;

      PETS = [CARD1, CARD2, CARD3, CARD4, CARD5, CARD6, CARD7, CARD8];
      count = 6;
    }
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    const activeCard1 =
      document.querySelectorAll(".card__pets-name")[2].innerHTML;
    const activeCard2 =
      document.querySelectorAll(".card__pets-name")[3].innerHTML;
    document.querySelectorAll(".card")[2].classList.add(activeCard1);
    document.querySelectorAll(".card")[3].classList.add(activeCard2);
  });
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Slider main page (767<=x<=1280px)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const mediaQuery_mobile = window.matchMedia("(max-width: 767px)");

if (mediaQuery_mobile.matches) {
  const hiddenCard = () => {
    document.querySelectorAll(".card")[8].classList.add("hidden");
    document.querySelectorAll(".card")[8].classList.remove("card");
    document.querySelectorAll(".card")[7].classList.add("hidden");
    document.querySelectorAll(".card")[7].classList.remove("card");
    document.querySelectorAll(".card")[5].classList.add("hidden");
    document.querySelectorAll(".card")[5].classList.remove("card");
    document.querySelectorAll(".card")[4].classList.add("hidden");
    document.querySelectorAll(".card")[4].classList.remove("card");
    document.querySelectorAll(".card")[2].classList.add("hidden");
    document.querySelectorAll(".card")[2].classList.remove("card");
    document.querySelectorAll(".card")[1].classList.add("hidden");
    document.querySelectorAll(".card")[1].classList.remove("card");
  };

  document.addEventListener("DOMContentLoaded", hiddenCard);

  const moveLeft = () => {
    const activeCard1 = document.querySelectorAll(".card")[1].innerHTML;

    let i;
    i = PETS.indexOf(activeCard1);
    PETS.splice(i, 1);

    let card_1 = addElemCard();

    ITEMS_LEFT.innerHTML = "";
    ITEMS_LEFT.appendChild(card_1);

    CAROUSEL.classList.add("transition-left_mobile");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };

  const moveRight = () => {
    const activeCard1 = document.querySelectorAll(".card")[1].innerHTML;

    let i;
    i = PETS.indexOf(activeCard1);
    PETS.splice(i, 1);

    let card_1 = addElemCard();

    ITEMS_RIGHT.innerHTML = "";
    ITEMS_RIGHT.appendChild(card_1);

    CAROUSEL.classList.add("transition-right_mobile");
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
  };

  let count = 7;
  const addElemCard = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = PETS[Math.floor(Math.random() * count)];
    count--;
    i = PETS.indexOf(card.innerHTML);
    PETS.splice(i, 1);

    return card;
  };

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left_mobile") {
      CAROUSEL.classList.remove("transition-left_mobile");

      const itemsLeft = ITEMS_LEFT.innerHTML;
      document.querySelector("#items_active").innerHTML = itemsLeft;
    } else {
      CAROUSEL.classList.remove("transition-right_mobile");

      const itemsRight = ITEMS_RIGHT.innerHTML;
      document.querySelector("#items_active").innerHTML = itemsRight;
    }
    PETS = [CARD1, CARD2, CARD3, CARD4, CARD5, CARD6, CARD7, CARD8];
    count = 7;
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    const activeCard1 =
      document.querySelectorAll(".card__pets-name")[1].innerHTML;
    document.querySelectorAll(".card")[1].classList.add(activeCard1);
  });
}
