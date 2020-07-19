import "normalize.css";
import "src/scss/lkProgram.scss";
import Popup from "./popup";

// Селекторы

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

const popupThanks = new Popup(thanksPopup, popupCloseReg);

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupThanks.open();
    popupReg.close();
});

// Открытие восстановления пароля

const popupRec = new Popup(modalRec, popupCloseReg);

popupLink.addEventListener('click', () => {
    popupLk.close();
    popupRec.open();

});

// Пароль восстановлен
const popupReset = new Popup(modalReset, popupCloseReg);

recButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupReset.open();
    popupRec.close();
});

// Аккордион
const panel = document.querySelectorAll('.accordion__panel');
const nextPanel = document.querySelectorAll('.accordion__panel_text');
const accordion = (panel) => {
for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener('click', (event) => {
        panel[i].nextElementSibling
            .classList.toggle('accordion__text-block_active');
        panel[i].nextElementSibling
            .classList.toggle('accordion__text-block_active-program');
        panel[i].classList.toggle('accordion__panel_active-program')
    })
}};
accordion(panel);
accordion(nextPanel)
