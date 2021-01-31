import React from "react";
import User from "../../model/User";

function NotLoginned(_: Readonly<{ user?: User }>): React.ReactElement {
    return <React.Fragment>
        <li className="burger-menu__element">
            <a className="nav-bar__link nav-bar__link_mini nav-bar__link_start" href="#">Начать работу</a>
        </li>
        <li className="burger-menu__element">
            <a className="nav-bar__link nav-bar__link_mini nav-bar__link_lk" href="#">Личный кабинет</a>
        </li>
    </React.Fragment>;
}

function Loginned(props: Readonly<{ user: User }>): React.ReactElement {
    return <React.Fragment>
        <li className="burger-menu__element">
            <a href="lk.html" className="header__user-box header__user-box_burger">
                <div className="header__image-box header__image-box_burger">
                    <img className="header__user-icon" src="images/user.svg" />
                </div>
                <p className="header__user header__user_burger">{ props.user.login }</p>
            </a>
        </li>
    </React.Fragment>;
}

export default function MainMenu(props: Readonly<{ user?: User }>): React.ReactElement {
    const UserPanel = props.user ? Loginned : NotLoginned;
    return <nav className="burger-menu">
        <ul className="burger-menu__list">
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="tel: +7 (843) 202-21-40">
                    +7 (843) 202-21-40
                </a>
            </li>
            <UserPanel user={props.user} />
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="about.html">О нас</a>
            </li>
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="rates.html">Тарифы</a>
            </li>
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="advantages.html">Возможности</a>
            </li>
            {/* <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="partners.html">Партнёрам</a>
            </li> */}
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="support.html">Инструкции и поддержка</a>
            </li>
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="questions.html">Частые вопросы</a>
            </li>
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="lkProgram.html">Партнёрская программа</a>
            </li>
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="lkCompany.html">Настройки компании</a>
            </li>
            <li className="burger-menu__element">
                <a className="nav-bar__link nav-bar__link_mini" href="lkProfile.html">Настройки профиля</a>
            </li>
            <li className="burger-menu__element burger-menu__element_exit">
                <a className="nav-bar__link nav-bar__link_mini" href="index.html">Выход</a>
                <img className="header__exit-icon header__exit-icon_burger" src="images/exit.svg" />
            </li>
        </ul>
    </nav>;
}
