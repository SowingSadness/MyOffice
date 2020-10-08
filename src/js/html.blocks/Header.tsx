import React, { useState } from 'react';
import BurgerMenu from './_header/BurgerMenu';
import MainMenu from './_header/MainMenu';
import type User from  '../model/User';
import RegisterFetch from 'src/js/auth.blocks/register';
import ModalRegister from "../auth.blocks/register.modal";

export default function Header(props: Readonly<{ user?: User}>): React.ReactElement {
    const Right = props.user ? Loginned : NotLoginned;
    return <header className="header">
        <div className="header__upper-menu">
            <a href="index.html" className="header__logo">
                <img alt="лого сайта" className="header__logo-image" src="images/logo3.png" />
                <p className="header__logo-text">мой офис</p>
            </a>
            <img className="burger-menu__button" src="images/open-menu.svg" alt="скрытое меню" />
            <BurgerMenu user={ props.user } />
            <a href="tel: +7 (843) 202-21-40" className="header__phone">+7 (843) 202-21-40</a>
            <Right user={ props.user } />
        </div>
        <MainMenu />
    </header>;
}

function NotLoginned(_: Readonly<{ user?: User }>): React.ReactElement {
    const [showed, setShow] = useState(0);

    function show() {
        setShow(Math.random());
    }

    return <React.Fragment>
        <button className="header__start-button" onClick={show}>Начать работу</button>
        <button className="header__lk-button">Личный кабинет</button>
        <RegisterFetch open={showed}></RegisterFetch>
    </React.Fragment>;
}

function Loginned(props: Readonly<{ user: User  }>): React.ReactElement {
    return <React.Fragment>
        <div className="header__lk-container">
            <div className="header__info-container">
                <div className="header__row-container">
                    <p className="header__balance-text">Баланс:</p>
                    <p className="header__balance-text header__balance-text_bold">{ props.user.balance } руб.</p>
                </div>
                <div className="header__row-container">
                    <p className="header__balance-text">Оплачено до:</p>
                    <p className="header__balance-text header__balance-text_bold">{ props.user.getDateDiscard() }</p>
                </div>
            </div>
            <a href="lk.html" className="header__user-box">
                <div className="header__image-box">
                    <img className="header__user-icon" src="images/user.svg" />
                </div>
                <p className="header__user">{ props.user.name }</p>
            </a>
            <a href="index.html">
                <img className="header__exit-icon" src="images/exit.svg" />
            </a>
        </div>
    </React.Fragment>;
}
