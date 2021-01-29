// Form Handle
let nlSubmit = document.getElementById("newsletter__submit");
let notifDiv = document.querySelector(".notif");
let notifContent = document.querySelector("#notif__content");

// click on the SEND btn
nlSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    try {
        chkMailFormat(email);
        chkEmpty(message);
        notif("Thank you for your message", "success");
    } catch (err) {
        notif(err, "failure");
    }
});

function chkMailFormat(test) {
    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            test
        )
    ) {
        return true;
    }
    throw "Check your email format";
}

function chkEmpty(test) {
    if (test.length !== 0) {
        return true;
    }
    throw "Your message is empty";
}

// Handles notification display
function notif(message, status) {
    notifContent.innerHTML = message;
    notifDiv.classList.add(`notif__${status}`);
    notifDiv.classList.add("notif__display");
    setTimeout(() => {
        notifDiv.classList.remove("notif__display");
        notifDiv.classList.remove(`notif__${status}`);
        setTimeout(() => {}, 1000);
    }, 3000);
}

// responsive main nav handle
let mainNavTogglerBtn = document.getElementById("toggler__icon");
let mainNavContainer = document.getElementById("nav__container-main-nav");
let navIcon = document.getElementById("toggler__icon");
let navLiItem = document.querySelectorAll(".nav__link");

mainNavTogglerBtn.addEventListener("click", () => {
    mainNavContainer.className.includes("collapsed")
        ? deployNav()
        : collapseNav();
});

for (i = 0; i < navLiItem.length; i++) {
    navLiItem[i].addEventListener("click", () => {
        mainNavContainer.className.includes("collapsed")
            ? deployNav()
            : collapseNav();
    });
}

function deployNav() {
    mainNavContainer.classList.remove("collapsed");
    navIcon.classList.add("nav__icon-action");
}
function collapseNav() {
    mainNavContainer.classList.add("collapsed");
    navIcon.classList.remove("nav__icon-action");
}

// CAROUSEL
let numberOfCarouselElements = 3;
let carouselElementToDisplay = 1;
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let carouselContainer = document.querySelector(".carousel__container");
let carouselElements = document.querySelectorAll(
    ".carousel__element-container"
);

prevBtn.addEventListener("click", () => {
    animateOut();
    switch (carouselElementToDisplay) {
        case 1:
            carouselElementToDisplay = numberOfCarouselElements;
            break;
        default:
            carouselElementToDisplay--;
    }
    setTimeout(() => {
        animateIn();
        displayCarouselElement(carouselElementToDisplay);
        displayCarouselBg(carouselElementToDisplay);
    }, 200);
});
nextBtn.addEventListener("click", () => {
    animateOut();
    switch (carouselElementToDisplay) {
        case 3:
            carouselElementToDisplay = 1;
            break;
        default:
            carouselElementToDisplay++;
    }
    setTimeout(() => {
        animateIn();
        displayCarouselElement(carouselElementToDisplay);
        displayCarouselBg(carouselElementToDisplay);
    }, 200);
});

function displayCarouselElement(number) {
    for (i = 0; i < carouselElements.length; i++) {
        carouselElements[i].classList.remove("_active");
    }
    carouselElements[number - 1].classList.add("_active");
}

function displayCarouselBg(number) {
    carouselContainer.id = `bg${number}`;
}

function animateIn() {
    carouselContainer.classList.add("_unblur");
    setTimeout(() => {
        carouselContainer.classList.remove("_unblur");
    }, 650);
}

function animateOut() {
    carouselContainer.classList.add("_blur");
    setTimeout(() => {
        carouselContainer.classList.remove("_blur");
    }, 350);
}
