const FIRST_PG = document.querySelector("#first-page");
const PREV_PG = document.querySelector("#previous-page");
const CUR_PG = document.querySelector("#current-page");
const NEXT_PG = document.querySelector("#next-page");
const LAST_PG = document.querySelector("#last-page");
let cardsContainer = document.querySelector(".cards-container");

const CARD1 = document.querySelector("#card_katrine").innerHTML;
const CARD2 = document.querySelector("#card_jennifer").innerHTML;
const CARD3 = document.querySelector("#card_woody").innerHTML;
const CARD4 = document.querySelector("#card_4").innerHTML;
const CARD5 = document.querySelector("#card_5").innerHTML;
const CARD6 = document.querySelector("#card_6").innerHTML;
const CARD7 = document.querySelector("#card_7").innerHTML;
const CARD8 = document.querySelector("#card_8").innerHTML;
let PETS_ARRAY = [];

const mediaQuery_desktop = window.matchMedia("(min-width: 1280px)");
const mediaQuery_tablet = window.matchMedia(
  "(max-width: 1279px) and (min-width: 768px)"
);
const mediaQuery_mobile = window.matchMedia("(max-width: 767px)");

const randomArray = (elements) => {
  let arrayN = [];
  let el = 0;
  let card;
  while (el < elements) {
    if (PETS_ARRAY.length == 0) {
      PETS_ARRAY = [CARD1, CARD2, CARD3, CARD4, CARD5, CARD6, CARD7, CARD8];
    }
    const avoidRepeat = () => {
      card = PETS_ARRAY[Math.floor(Math.random() * PETS_ARRAY.length)];
      return card;
    };
    avoidRepeat();
    while (new Set(arrayN).has(card)) {
      avoidRepeat();
    }
    arrayN.push(card);
    i = PETS_ARRAY.indexOf(card);
    PETS_ARRAY.splice(i, 1);
    el++;
  }
  return arrayN;
};

const addElemCard = (arr) => {
  cardsContainer.innerHTML = "";
  for (let i in arr) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = arr[i];
    cardsContainer.appendChild(card);
  }

  let a = 0;
  if (mediaQuery_desktop.matches) {
    while (a < 8) {
      const activeCard =
        document.querySelectorAll(".card__pets-name")[a].innerHTML;
      document.querySelectorAll(".card")[a].classList.add(activeCard);
      a++;
    }
  }

  if (mediaQuery_tablet.matches) {
    while (a < 6) {
      const activeCard =
        document.querySelectorAll(".card__pets-name")[a].innerHTML;
      document.querySelectorAll(".card")[a].classList.add(activeCard);
      a++;
    }
  }

  if (mediaQuery_mobile.matches) {
    while (a < 3) {
      const activeCard =
        document.querySelectorAll(".card__pets-name")[a].innerHTML;
      document.querySelectorAll(".card")[a].classList.add(activeCard);
      a++;
    }
  }

  return cardsContainer;
};

const disablePaginationLP = (lastPg) => {
  FIRST_PG.classList.remove("inactive-button");
  PREV_PG.classList.remove("inactive-button");
  FIRST_PG.classList.add("ready-button");
  PREV_PG.classList.add("ready-button");
  FIRST_PG.removeAttribute("disabled");
  PREV_PG.removeAttribute("disabled");
  LAST_PG.classList.add("inactive-button");
  NEXT_PG.classList.add("inactive-button");
  LAST_PG.classList.remove("ready-button");
  NEXT_PG.classList.remove("ready-button");
  LAST_PG.setAttribute("disabled", "disabled");
  NEXT_PG.setAttribute("disabled", "disabled");

  CUR_PG.innerHTML = lastPg;
};

const disablePaginationFP = () => {
  FIRST_PG.classList.add("inactive-button");
  PREV_PG.classList.add("inactive-button");
  FIRST_PG.classList.remove("ready-button");
  PREV_PG.classList.remove("ready-button");
  FIRST_PG.setAttribute("disabled", "disabled");
  PREV_PG.setAttribute("disabled", "disabled");
  LAST_PG.classList.remove("inactive-button");
  NEXT_PG.classList.remove("inactive-button");
  LAST_PG.classList.add("ready-button");
  NEXT_PG.classList.add("ready-button");
  LAST_PG.removeAttribute("disabled");
  NEXT_PG.removeAttribute("disabled");

  CUR_PG.innerHTML = 1;
};

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Pagination >=1280px
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

if (mediaQuery_desktop.matches) {
  const PETS = randomArray(8)
    .concat(randomArray(8))
    .concat(randomArray(8))
    .concat(randomArray(8))
    .concat(randomArray(8))
    .concat(randomArray(8));

  const addCardToFirstPg = () => {
    addElemCard(PETS.slice(0, 8));
  };

  document.addEventListener("DOMContentLoaded", addCardToFirstPg);

  const defineCurrentPGforPP = (lastPg) => {
    const curPg = CUR_PG.innerHTML;
    if (curPg == lastPg) {
      CUR_PG.innerHTML = lastPg - 1;
      LAST_PG.classList.remove("inactive-button");
      NEXT_PG.classList.remove("inactive-button");
      LAST_PG.classList.add("ready-button");
      NEXT_PG.classList.add("ready-button");
      LAST_PG.removeAttribute("disabled");
      NEXT_PG.removeAttribute("disabled");
    } else if (curPg == 2) {
      disablePaginationFP();
      return PETS.slice(0, 8);
    } else {
      CUR_PG.innerHTML -= 1;
    }
    return PETS.slice((curPg - 2) * 8, (curPg - 1) * 8);
  };

  const defineCurrentPGforNP = (lastPg) => {
    const curPg = CUR_PG.innerHTML;
    const firstPg = 1;
    if (curPg == firstPg) {
      CUR_PG.innerHTML = 2;
      FIRST_PG.classList.remove("inactive-button");
      PREV_PG.classList.remove("inactive-button");
      FIRST_PG.classList.add("ready-button");
      PREV_PG.classList.add("ready-button");
      FIRST_PG.removeAttribute("disabled");
      PREV_PG.removeAttribute("disabled");
    } else if (curPg == lastPg - 1) {
      disablePaginationLP(lastPg);
      return PETS.slice(40);
    } else {
      CUR_PG.innerHTML = Number(curPg) + 1;
    }
    return PETS.slice(Number(curPg) * 8, (Number(curPg) + 1) * 8);
  };

  FIRST_PG.addEventListener("click", () => {
    addElemCard(PETS.slice(0, 8)), disablePaginationFP();
  });
  PREV_PG.addEventListener("click", () => {
    addElemCard(defineCurrentPGforPP(6));
  });
  NEXT_PG.addEventListener("click", () => {
    addElemCard(defineCurrentPGforNP(6));
  });
  LAST_PG.addEventListener("click", () => {
    addElemCard(PETS.slice(40)), disablePaginationLP(6);
  });
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Pagination 768<= x <1280px
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

if (mediaQuery_tablet.matches) {
  const PETS = randomArray(6)
    .concat(randomArray(6))
    .concat(randomArray(6))
    .concat(randomArray(6))
    .concat(randomArray(6))
    .concat(randomArray(6))
    .concat(randomArray(6))
    .concat(randomArray(6));

  const hiddenCard = () => {
    document.querySelector("#card_8").classList.add("hidden");
    document.querySelector("#card_8").classList.remove("card");
    document.querySelector("#card_7").classList.add("hidden");
    document.querySelector("#card_7").classList.remove("card");
  };

  const addCardToFirstPg = () => {
    addElemCard(PETS.slice(0, 6));
  };

  document.addEventListener("DOMContentLoaded", hiddenCard);
  document.addEventListener("DOMContentLoaded", addCardToFirstPg);

  const defineCurrentPGforPP = (lastPg) => {
    const curPg = CUR_PG.innerHTML;
    if (curPg == lastPg) {
      CUR_PG.innerHTML = lastPg - 1;
      LAST_PG.classList.remove("inactive-button");
      NEXT_PG.classList.remove("inactive-button");
      LAST_PG.classList.add("ready-button");
      NEXT_PG.classList.add("ready-button");
      LAST_PG.removeAttribute("disabled");
      NEXT_PG.removeAttribute("disabled");
    } else if (curPg == 2) {
      disablePaginationFP();
      return PETS.slice(0, 6);
    } else {
      CUR_PG.innerHTML -= 1;
    }
    return PETS.slice((curPg - 2) * 6, (curPg - 1) * 6);
  };

  const defineCurrentPGforNP = (lastPg) => {
    const curPg = CUR_PG.innerHTML;
    const firstPg = 1;
    if (curPg == firstPg) {
      CUR_PG.innerHTML = 2;
      FIRST_PG.classList.remove("inactive-button");
      PREV_PG.classList.remove("inactive-button");
      FIRST_PG.classList.add("ready-button");
      PREV_PG.classList.add("ready-button");
      FIRST_PG.removeAttribute("disabled");
      PREV_PG.removeAttribute("disabled");
    } else if (curPg == lastPg - 1) {
      disablePaginationLP(lastPg);
      return PETS.slice(42);
    } else {
      CUR_PG.innerHTML = Number(CUR_PG.innerHTML) + 1;
    }
    return PETS.slice(Number(curPg) * 6, (Number(curPg) + 1) * 6);
  };

  FIRST_PG.addEventListener("click", () => {
    addElemCard(PETS.slice(0, 6)), disablePaginationFP();
  });
  PREV_PG.addEventListener("click", () => {
    addElemCard(defineCurrentPGforPP(8));
  });
  NEXT_PG.addEventListener("click", () => {
    addElemCard(defineCurrentPGforNP(8));
  });
  LAST_PG.addEventListener("click", () => {
    addElemCard(PETS.slice(42)), disablePaginationLP(8);
  });
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Pagination 768< x
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

if (mediaQuery_mobile.matches) {
  //const PETS_FIRST_PG = [CARD1, CARD2, CARD3];
  const PETS = randomArray(3)
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3))
    .concat(randomArray(3));
  //const PETS_LAST_PG = shuffle([CARD6, CARD7, CARD8]);

  const hiddenCard = () => {
    document.querySelector("#card_8").classList.add("hidden");
    document.querySelector("#card_8").classList.remove("card");
    document.querySelector("#card_7").classList.add("hidden");
    document.querySelector("#card_7").classList.remove("card");
    document.querySelector("#card_6").classList.add("hidden");
    document.querySelector("#card_6").classList.remove("card");
    document.querySelector("#card_5").classList.add("hidden");
    document.querySelector("#card_5").classList.remove("card");
    document.querySelector("#card_4").classList.add("hidden");
    document.querySelector("#card_4").classList.remove("card");
  };

  const addCardToFirstPg = () => {
    addElemCard(PETS.slice(0, 3));
  };

  document.addEventListener("DOMContentLoaded", hiddenCard);
  document.addEventListener("DOMContentLoaded", addCardToFirstPg);

  const defineCurrentPGforPP = (lastPg) => {
    const curPg = CUR_PG.innerHTML;
    if (curPg == lastPg) {
      CUR_PG.innerHTML = lastPg - 1;
      LAST_PG.classList.remove("inactive-button");
      NEXT_PG.classList.remove("inactive-button");
      LAST_PG.classList.add("ready-button");
      NEXT_PG.classList.add("ready-button");
      LAST_PG.removeAttribute("disabled");
      NEXT_PG.removeAttribute("disabled");
    } else if (curPg == 2) {
      disablePaginationFP();
      return PETS.slice(0, 3);
    } else {
      CUR_PG.innerHTML -= 1;
    }
    return PETS.slice((curPg - 2) * 3, (curPg - 1) * 3);
  };

  const defineCurrentPGforNP = (lastPg) => {
    const curPg = CUR_PG.innerHTML;
    const firstPg = 1;
    if (curPg == firstPg) {
      CUR_PG.innerHTML = 2;
      FIRST_PG.classList.remove("inactive-button");
      PREV_PG.classList.remove("inactive-button");
      FIRST_PG.classList.add("ready-button");
      PREV_PG.classList.add("ready-button");
      FIRST_PG.removeAttribute("disabled");
      PREV_PG.removeAttribute("disabled");
    } else if (curPg == lastPg - 1) {
      disablePaginationLP(lastPg);
      return PETS.slice(45);
    } else {
      CUR_PG.innerHTML = Number(CUR_PG.innerHTML) + 1;
    }
    return PETS.slice(Number(curPg) * 3, (Number(curPg) + 1) * 3);
  };

  FIRST_PG.addEventListener("click", () => {
    addElemCard(PETS.slice(0, 3)), disablePaginationFP();
  });
  PREV_PG.addEventListener("click", () => {
    addElemCard(defineCurrentPGforPP(16));
  });
  NEXT_PG.addEventListener("click", () => {
    addElemCard(defineCurrentPGforNP(16));
  });
  LAST_PG.addEventListener("click", () => {
    addElemCard(PETS.slice(45)), disablePaginationLP(16);
  });
}
