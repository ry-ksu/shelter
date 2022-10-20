const ARRAY_OF_PETS = [
  {
    name: "Jennifer",
    img: "jennifer",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "sophia",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "woody",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "scarlett",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "katrine",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "timmy",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "freddie",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "charly",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

class Modal {
  constructor({
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) {
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  // Modal generator
  generateModal() {
    const createDomNode = (node, elem, ...classes) => {
      node = document.createElement(elem);
      node.classList.add(...classes);
      return node;
    };

    //Overlay
    let overlay = createDomNode("overlay", "div", "overlay");

    //Modal content
    let modalContent = createDomNode("modalContent", "div", "modal__content");

    //Close Button
    let modalCloseButton = createDomNode(
      "modalCloseButton",
      "button",
      "modal__close-btn"
    );

    //Modal
    let modal = createDomNode("modal", "div", "modal");
    modal.setAttribute("data-name", this.name);

    //Template
    let template = "";
    template += `<div class="modal__pets-img card__pets-img_${this.img}"></div>`;
    template += `<div class="modal__text">
                <div class="modal__text_base-info">
                <h3>${this.name}</h3>
                <h4>${this.type} - ${this.breed}</h4>
                </div>
                <h5 class="h5-modal-window_descriptions">${this.description}</h5>
                <ul class="h5-modal-window">
                    <li><span><strong>Age: </strong>${this.age}</span></li>
                    <li><span><strong>Inoculations: </strong>${this.inoculations}</span></li>
                    <li><span><strong>Diseases: </strong>${this.diseases}</span></li>
                    <li><span><strong>Parasites: </strong>${this.parasites}</span></li>
                </ul>
            </div>`;

    modalCloseButton.innerHTML = "&#9587;";
    overlay.append(modalContent);
    modalContent.append(modal);
    modalContent.append(modalCloseButton);
    modal.innerHTML = template;
    return overlay;
  }
}

const generateModalWithPets = (petsID) => {
  const currentModal = new Modal(ARRAY_OF_PETS[petsID]);
  return currentModal.generateModal();
};

const searchCorrectPetCard = (event) => {
  if (event.target.className == "modal_pet Jennifer") {
    renderModalInWindow(generateModalWithPets(0));
  }
  if (event.target.className == "modal_pet Sophia") {
    renderModalInWindow(generateModalWithPets(1));
  }
  if (event.target.className == "modal_pet Woody") {
    renderModalInWindow(generateModalWithPets(2));
  }
  if (event.target.className == "modal_pet Scarlett") {
    renderModalInWindow(generateModalWithPets(3));
  }
  if (event.target.className == "modal_pet Katrine") {
    renderModalInWindow(generateModalWithPets(4));
  }
  if (event.target.className == "modal_pet Timmy") {
    renderModalInWindow(generateModalWithPets(5));
  }
  if (event.target.className == "modal_pet Freddie") {
    renderModalInWindow(generateModalWithPets(6));
  }
  if (event.target.className == "modal_pet Charly") {
    renderModalInWindow(generateModalWithPets(7));
  }

  addEventListenerToOverlay();
};

const renderModalInWindow = (modal) => {
  document.body.append(modal);
};

const addEventListenerToOverlay = () => {
  let overlay = document.querySelector(".overlay");

  overlay.addEventListener("click", (e) => {
    if (
      e.target.className == "overlay" ||
      e.target.className == "modal__close-btn" ||
      e.target.className == "modal__content"
    ) {
      document.querySelector(".overlay").remove();
      document.body.style.overflow = "";
    }
  });
};

let cards_container = document.querySelector(".cards-container");

cards_container.addEventListener("click", (event) => {
  document.body.style.overflow = "hidden";
  searchCorrectPetCard(event);
});
