import * as React from 'react';

export default function MainMenu(): React.ReactElement {
    return <nav className="nav-bar nav-bar_lk">
        <ul className="nav-bar__list">
            <li className="nav-bar__element">
                <a className="nav-bar__link nav-bar__link_lk  nav-bar__link_active" href="lk.html">Личный кабинет</a>
            </li>
            <li className="nav-bar__element">
                <a className="nav-bar__link nav-bar__link_lk" href="lkProgram.html">Партнёрская программа</a>
            </li>
            <li className="nav-bar__element">
                <a className="nav-bar__link nav-bar__link_lk" href="lkCompany.html">Настройки компании</a>
            </li>
            <li className="nav-bar__element">
                <a className="nav-bar__link nav-bar__link_lk" href="lkProfile.html">Настройки профиля</a>
            </li>
        </ul>
    </nav>;
}
