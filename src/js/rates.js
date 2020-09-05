import "normalize.css";
import "src/scss/rates.scss";
import Popup from "./popup";


const lkButton = document.querySelector('.header__lk-button');
const burgerButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const main = document.querySelector('.main');
const modalLk = document.querySelector('.modal_lk');
const popupCloseLk = document.querySelector('.popup__close_lk');
const lkLink = document.querySelector('.nav-bar__link_lk');
const startWorkButton = document.querySelector('.header__start-button');
const modalReg = document.querySelector('.modal_reg');
const popupCloseReg = document.querySelector('.popup__close_reg');
const confirmButton = document.querySelector('.popup__button_reg');
const thanksPopup = document.querySelector('.modal_thanks');
const popupLink = document.querySelector('.popup__link');
const modalRec = document.querySelector('.modal_recovery');
const recButton = document.querySelector('.popup__button_recovery');
const modalReset = document.querySelector('.modal_reset');
const closeThanks = document.querySelector('.popup__close_thanks');
const closeReset = document.querySelector('.popup__close_reset');
const closeRec = document.querySelector('.popup__close_recovery');

// Тарифы
const toPlug = document.querySelectorAll('.rates__to-plug');
const modalPlug = document.querySelector('.modal_plug');
const closePlug = document.querySelector('.popup__close_plug');
// Открытие личного кабинета
const popupLk = new Popup(modalLk, popupCloseLk);


lkButton.addEventListener('click', () => {
    popupLk.open();
});

lkLink.addEventListener('click', () => {
    popupLk.open();
    burgerMenu.classList.remove('burger-menu_opened');

});

// Открытие регистрации
const popupReg = new Popup(modalReg, popupCloseReg);

const lkStart = document.querySelector('.nav-bar__link_start');
lkStart.addEventListener('click', () => {
    popupReg.open()
});
startWorkButton.addEventListener('click', () => {
    popupReg.open();

});

// Открытие мобильного меню

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu_opened');

});
main.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu_opened')
});

// Открытие формы спасибо

const popupThanks = new Popup(thanksPopup, closeThanks);

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupThanks.open();
    popupReg.close();
});

// Открытие восстановления пароля

const popupRec = new Popup(modalRec, closeRec);

popupLink.addEventListener('click', () => {
    popupLk.close();
    popupRec.open();

});

// Пароль восстановлен
const popupReset = new Popup(modalReset, closeReset);

recButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupReset.open();
    popupRec.close();
});
// Тарифы
const popupPlug = new Popup(modalPlug, closePlug);

toPlug.forEach((item) => {
   item.addEventListener('click', () => {
       popupPlug.open();
   })
});

// Прибавление и уменьшение числа

const minusUp = document.querySelector('.calculate-block__minus_up');
const plusUp = document.querySelector('.calculate-block__minus_plus-up');
const numberUp = document.querySelector('.calculate-block__number');
const countBlock = document.querySelector('.calculate-block__count-block');
const numberDown = document.querySelector('.calculate-block__number_down');
const minusDown = document.querySelector('.calculate-block__minus_down');
const plusDown = document.querySelector('.calculate-block__minus_plus-down');
const countBlockDown = document.querySelector('.calculate-block__count-block-down')

const countUp = (event, number, plus, minus) => {
    if (event.target === minus && number.textContent > 0) {
            number.textContent--
    } else if (event.target === plus) {
        number.textContent++
    }
};

countBlock.addEventListener('click', (event) => {
    countUp(event, numberUp, plusUp, minusUp)
});

countBlockDown.addEventListener('click', (event) => {
    countUp(event, numberDown, plusDown, minusDown)
});



