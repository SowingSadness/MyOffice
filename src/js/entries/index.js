

import "src/scss/index.scss";
import Swiper, { Navigation, Pagination } from "swiper";
import Index from "src/js/index.blocks";
import include_me from "src/js/router";

include_me(Index);


//#region swipe
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

//#endregion