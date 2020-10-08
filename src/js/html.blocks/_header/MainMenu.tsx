import * as React from 'react';

export default function MainMenu(): React.ReactElement {
    return <nav className="nav-bar">
        <ul className="nav-bar__list">
            <li className="nav-bar__element">
                <a className="nav-bar__link" href="about.html">О нас</a>
            </li>
            <li className="nav-bar__element">
                <a className="nav-bar__link" href="rates.html">Тарифы</a>
            </li>
            <li className="nav-bar__element">
                <a className="nav-bar__link" href="advantages.html">Возможности</a>
            </li>
            <li className="nav-bar__element">
                <a className="nav-bar__link" href="partners.html">Партрнёрам</a>
            </li>
            <li className="nav-bar__element">
                <a className="nav-bar__link" href="support.html">Инструкции и поддержка</a>
            </li>
            <li className="nav-bar__element">
                <a className="nav-bar__link" href="questions.html">Частые вопросы</a>
            </li>
        </ul>
    </nav>;
}
