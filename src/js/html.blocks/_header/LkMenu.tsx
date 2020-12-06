import React from 'react';

export default function LkMenu(): React.ReactElement {
    const activeClass = " nav-bar__link_active";
    let index = 0;
    switch (window.location.pathname) {
        case "/lkProgram.html":
            index = 1;
            break;
        case "/lkCompany.html":
            index = 2;
            break;
        case "/lkProfile.html":
            index = 3;
            break;
    }

    return <nav className="nav-bar nav-bar_lk">
        <ul className="nav-bar__list">
            <li className="nav-bar__element">
                <a className={ "nav-bar__link nav-bar__link_lk" + (index === 0 ? activeClass : "") }
                    href="lk.html">Личный кабинет</a>
            </li>
            <li className="nav-bar__element">
                <a className={ "nav-bar__link nav-bar__link_lk" + (index === 1 ? activeClass : "") }
                    href="lkProgram.html">Партнёрская программа</a>
            </li>
            <li className="nav-bar__element">
                <a className={ "nav-bar__link nav-bar__link_lk" + (index === 2 ? activeClass : "") }
                    href="lkCompany.html">Настройки компании</a>
            </li>
            <li className="nav-bar__element">
                <a className={ "nav-bar__link nav-bar__link_lk" + (index === 3 ? activeClass : "") }
                    href="lkProfile.html">Настройки профиля</a>
            </li>
        </ul>
    </nav>;
}
