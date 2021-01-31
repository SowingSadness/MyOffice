import React from 'react';

export default function Footer(): React.ReactElement {
    return <footer className="footer">
        <a href="index.html" className="footer__logo">
            <img alt="лого сайта" className="footer__logo-image" src={ require('src/images/logo3.png') } />
            <p className="footer__logo-text">мой офис</p>
        </a>
        <div className="footer__4-blocks">
            <div className="footer-text-block">
                <h3 className="footer-text-block__title">Контакты</h3>
                <ul className="footer-text-block__list">
                    <li className="footer-text-block__element">
                        <img className="footer-text-block__icon"
                            alt="иконка телефона"
                            src={ require('src/images/phone.svg') } />
                        <a className="footer-text-block__link" href="tel: +7 (843) 202-21-40">
                            +7 (843) 202-21-40
                            </a>
                    </li>
                    <li className="footer-text-block__element">
                        <img className="footer-text-block__icon" alt="иконка почты" src={ require('src/images/mail.svg') } />
                        <a className="footer-text-block__link" href="mailto: support@moiofis.ru">support@moiofis.ru</a>
                    </li>
                    <li className="footer-text-block__element">
                        <img className="footer-text-block__icon" alt="иконка метки" src={ require('src/images/marker.svg') } />
                        <a className="footer-text-block__link" href="https://yandex.ru/maps/-/CCQlQNquKA" target="_blank">
                            г. Казань, ул. Юлиуса Фучика, дом № 90А, помещение 419-420
                            </a>
                    </li>
                </ul>
            </div>
            <div className="footer-text-block">
                <h3 className="footer-text-block__title">Компания</h3>
                <ul className="footer-text-block__list">
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="rates.html">Тарифы</a>
                    </li>
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="about.html">О нас</a>
                    </li>
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="advantages.html">Возможности</a>
                    </li>
                    {/* <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="partners.html">Партнёрам</a>
                    </li> */}
                </ul>
            </div>
            <div className="footer-text-block">
                <h3 className="footer-text-block__title">Продукты</h3>
                <ul className="footer-text-block__list">
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="advantages.html#accounting">1С: Бухгалтерия предприятия</a>
                    </li>
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="advantages.html#salary">1С: Зарплата и управление персоналом</a>
                    </li>
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="advantages.html#trading">1С: Управление торговлей</a>
                    </li>
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="advantages.html#firm">1С: Управление нашей фирмой</a>
                    </li>
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="advantages.html#garden">1С: Садовод</a>
                    </li>
                </ul>
            </div>
            <div className="footer-text-block">
                <h3 className="footer-text-block__title">Поддержка</h3>
                <ul className="footer-text-block__list">
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="questions.html">Часто задаваемы вопросы</a>
                    </li>
                    <li className="footer-text-block__element">
                        <a className="footer-text-block__link" href="support.html">Инструкции</a>
                    </li>
                </ul>
            </div>
        </div>
        <ul className="footer__bottom-block">
            <li className="footer__bottom-block-element">
                <p className="footer__bottom-link">&copy; Все права защищены</p>
            </li>
            <li className="footer__bottom-block-element">
                <a href="policy.html" className="footer__bottom-link">Политика конфиденциальности</a>
            </li>
            <li className="footer__bottom-block-element">
                <a href="#" className="footer__bottom-link">Временные файлы cookies</a>
            </li>
        </ul>
    </footer>;
}