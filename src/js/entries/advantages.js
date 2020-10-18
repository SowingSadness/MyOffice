import "src/scss/advantages.scss";
import Advantages from "src/js/page.blocks/advantages";
import include_me from "src/js/router";
import Popup from "./popup";

include_me(Advantages);


// Запустить программу // Возможности
const modalBegin = document.querySelector('.modal_begin');
const startProgram = document.querySelectorAll('.ac-block__button');
const modalStart = document.querySelector('.modal_start');
const closeStart = document.querySelector('.popup__close_start');
const beginWork = document.querySelector('.additional__button');

const popupStart = new Popup(modalStart, closeStart);
startProgram.forEach((item) => {item.addEventListener('click', (event) => {
    popupStart.open();
});});

const closeBegin = document.querySelector('.popup__close_begin');
const popupBegin = new Popup(modalBegin, closeBegin);

beginWork.addEventListener('click', () => {
    popupBegin.open();
});