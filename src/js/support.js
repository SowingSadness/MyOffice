import "normalize.css";
import "src/scss/support.scss";
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

// Поддержка
const getSupport = document.querySelector('.support__bottom-button');
const modalQue = document.querySelector('.modal_question');
const closeQue = document.querySelector('.popup__close_question');
const modalThanksQue = document.querySelector('.modal_thanks-question');
const confirmQue = document.querySelector('.popup__button_question');

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

// Задать вопрос // поддержка

const popupQuestion = new Popup(modalQue, closeQue);

getSupport.addEventListener('click', () => {
    popupQuestion.open();
});

const closeThanksQue = document.querySelector('.popup__close_thanks-question');

const popupThanksQuestion = new Popup(modalThanksQue, closeThanksQue);

confirmQue.addEventListener('click', (event) => {
   event.preventDefault();
   popupThanksQuestion.open();
   popupQuestion.close();
});


