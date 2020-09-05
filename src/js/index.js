
import "normalize.css";
import "src/scss/index.scss";
import Swiper, { Navigation, Pagination } from "swiper";
import Popup from "./popup";

// Свайпер
Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    slidesPerColumn: 1,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
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
const closeThanks = document.querySelector('.popup__close_thanks');
const closeReset = document.querySelector('.popup__close_reset');
const closeRec = document.querySelector('.popup__close_recovery');
const rentStart = document.querySelector('.rent__try-button');
const startNow = document.querySelector('.start-work__button');
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

startNow.addEventListener('click', () => {
    popupReg.open()
});

rentStart.addEventListener('click', () => {
    popupReg.open()
});

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