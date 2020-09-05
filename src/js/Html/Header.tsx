import * as React from 'react';
import BurgerMenu from './_header/BurgerMenu';
import MainMenu from './_header/MainMenu';

export default function Header(): React.ReactElement {
    return <header className="header">
        <div className="header__upper-menu">
            <a href="index.html" className="header__logo">
                <img alt="лого сайта" className="header__logo-image" src="images/logo3.png" />
                <p className="header__logo-text">мой офис</p>
            </a>
            <img className="burger-menu__button" src="images/open-menu.svg" alt="скрытое меню" />
            <BurgerMenu />
            <a href="tel: +7 (843) 202-21-40" className="header__phone">+7 (843) 202-21-40</a>
            <div className="header__lk-container">
                <div className="header__info-container">
                    <div className="header__row-container">
                        <p className="header__balance-text">Баланс:</p>
                        <p className="header__balance-text header__balance-text_bold">3 000 руб.</p>
                    </div>
                    <div className="header__row-container">
                        <p className="header__balance-text">Оплачено до:</p>
                        <p className="header__balance-text header__balance-text_bold">20.05.2020</p>
                    </div>
                </div>
                <a href="lk.html" className="header__user-box">
                    <div className="header__image-box">
                        <img className="header__user-icon" src="images/user.svg" />
                    </div>
                    <p className="header__user">Сергей Иванов</p>
                </a>
                <a href="index.html">
                    <img className="header__exit-icon" src="images/exit.svg" />
                </a>
            </div>
        </div>
        <MainMenu />
    </header>;
}
