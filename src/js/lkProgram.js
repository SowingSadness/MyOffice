import "normalize.css";
import "src/scss/lkProgram.scss";
import Popup from "./popup";

// Селекторы

const burgerButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const main = document.querySelector('.main');
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

// Аккордион
const panel = document.querySelectorAll('.accordion__panel');
const nextPanel = document.querySelectorAll('.accordion__panel_text');

const accordion = (panel, mix) => {
    for (let i = 0; i < panel.length; i++) {
        panel[i].addEventListener('click', () => {
            panel[i].nextElementSibling
                .classList.toggle(`accordion__text-block_${mix}`);

            panel[i].classList.toggle('accordion__panel_active-program')
        })
}};
accordion(panel, "active");
accordion(nextPanel, "price-active");
