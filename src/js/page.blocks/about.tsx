import React from "react";

export default function About(): React.ReactElement {
    return <main className="main main_about">
        <section className="about">
            <img className="about__cloud1" src={require('src/images/clouds_about/about1.svg')} />
            <img className="about__cloud2" src={require('src/images/clouds_about/about2.svg')} />
            <img className="about__cloud3" src={require('src/images/clouds_about/about3.svg')} />
            <img className="about__cloud4" src={require('src/images/clouds_about/about1.svg')} />
            <img className="about__cloud5" src={require('src/images/clouds_about/about1.svg')} />
            <img className="about__cloud6" src={require('src/images/clouds_about/about1.svg')} />
            <img className="about__cloud7" src={require('src/images/clouds_about/about2.svg')} />
            <img className="about__cloud8" src={require('src/images/clouds_about/about3.svg')} />
            <img className="about__cloud9" src={require('src/images/clouds_about/about3.svg')} />
            <h1 className="page-title about__title">о нас</h1>
            <div className="about__description-block">
                <div className="about__left-block">
                    <p className="about__description">
                        Компания &laquo;Мой Офис&raquo;
                        помогает бизнесу экономить средства и&nbsp;развиваться быстрее.
                        Мы&nbsp;предоставляем программные продукты в&nbsp;аренду.
                        Вы&nbsp;получаете готовую надежную и&nbsp;отлаженную информационную систему.
                        </p>
                    <p className="about__description">
                        Мой Офис&quot; является сертифицированным партнёром&nbsp;1С.
                        </p>
                </div>
                <ul className="about__right-block">
                    <li className="about__right-element">
                        <p className="about__number">12</p>
                        <p className="about__text">лет на рынке IT- сервисов</p>
                    </li>
                    <li className="about__right-element">
                        <p className="about__number">99,7%</p>
                        <p className="about__text">стабильность доступа сервиса</p>
                    </li>
                    <li className="about__right-element">
                        <p className="about__number">7</p>
                        <p className="about__text">дней бесплатно новым клиентам</p>
                    </li>
                    <li className="about__right-element">
                        <p className="about__number">200</p>
                        <p className="about__text">довольных клиентов</p>
                    </li>
                </ul>
            </div>
            <div className="bottom-block">
                <div className="bottom-block__column">
                    <h2 className="bottom-block__title">ООО «МаксКом Сервис»</h2>
                    <ul className="bottom-block__list">
                        <li className="bottom-block__element">
                            <p className="bottom-block__bold-text">Юридический адрес:</p>
                            <p className="bottom-block__text">
                                420140, г. Казань, ул. Юлиуса Фучика, дом № 90А, помещение 419-420
                                </p>
                        </li>
                        <li className="bottom-block__element">
                            <p className="bottom-block__bold-text">Фактический адрес:</p>
                            <p className="bottom-block__text">
                                420140, г. Казань, ул. Юлиуса Фучика, дом № 90А, помещение 419-420
                                </p>
                        </li>
                    </ul>
                </div>
                <div className="bottom-block__column">
                    <h2 className="bottom-block__title">Контакты</h2>
                    <ul className="bottom-block__list">
                        <li className="bottom-block__element">
                            <img className="bottom-block__icon"
                                alt="иконка телефона"
                                src={require('src/images/blackphone.svg')} />
                            <a className="bottom-block__text" href="tel: +7-843-202-21-40">
                                +7-843-202-21-40
                                </a>
                        </li>
                        <li className="bottom-block__element">
                            <img className="footer-text-block__icon" alt="иконка почты" src={require('src/images/blackmail.svg')} />
                            <a className="bottom-block__text_underline bottom-block__text" href="https://yandex.ru/maps/-/CCQlQNquKA" target="_blank">
                                support@moiofis.ru
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-block__column">
                    <h2 className="bottom-block__title">Реквизиты:</h2>
                    <ul className="bottom-block__list">
                        <li className="bottom-block__element">
                            <p className="bottom-block__text">
                                ИНН/КПП: 1655157942/168601001
                                ОГРН: 1081690029816
                            </p>
                            <p className="bottom-block__text">
                                Расчетный счет: 40702810729370000941
                            </p>
                            <p className="bottom-block__text">
                                Корреспондентский счет: 30101810200000000824
                            </p>
                            <p className="bottom-block__text">
                                Банк: ФИЛИАЛ &laquo;НИЖЕГОРОДСКИЙ&raquo; АО&nbsp;&laquo;АЛЬФА-БАНК&raquo; БИК: 042202824
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <a href="https://yandex.ru/maps/-/CCQlQNquKA" target="_blank">
                <iframe
                    className="about__image"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A0231e673e26d01612cba729baadeead7d7add041dba04eaf4e0c8a7c5d79fd6f&amp;source=constructor"
                    width="1140" height="386">
                </iframe>
            </a>
        </section>
    </main>;
}