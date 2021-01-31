import React, { useState } from "react";
import Register from "src/js/auth.blocks/register";
import { openSignal, closeSignal, ISignal } from "src/js/html.blocks/modal";

export default function Index(): React.ReactElement {
    const [registerSignal, onSignal] = useState<ISignal>(closeSignal());

    return <main className="main main_index">
        <section className="rent">
            <img className="cloud__1" src={ require('src/images/clouds/cloud1.svg') } />
            <img className="cloud__2" src={ require('src/images/clouds/cloud2.svg') } />
            <img className="cloud__3" src={ require('src/images/clouds/cloud3.svg') } />
            <div className="rent__text-block">
                <h1 className="rent__title">аренда программ 1c&nbsp;предприятие</h1>
                <p className="rent__description">
                    Подключайтесь за&nbsp;1&nbsp;минуту
                    и&nbsp;работайте с&nbsp;привычными программами 1С
                    через Интернет в&nbsp;любое время и&nbsp;в&nbsp;любом месте
                    </p>
                <ul className="rent__list">
                    <li className="rent__element">
                        <img alt="галочка" src={ require('src/images/checked.svg') } />
                            &nbsp;От 960 рублей в месяц
                        </li>
                    <li className="rent__element">
                        <img alt="галочка" src={ require('src/images/checked.svg') } />
                            &nbsp;12 лет на рынке
                        </li>
                    <li className="rent__element">
                        <img alt="галочка" src={ require('src/images/checked.svg') } />
                            &nbsp;Автообновление программ 1C
                        </li>
                </ul>
                <button className="rent__try-button" onClick={ () => onSignal(openSignal()) }>Попробовать 7 дней бесплатно</button>
                <Register signal={ registerSignal }></Register>
            </div>
            <img className="rent__image" src={ require('src/images/cloud.jpg') } alt="облако с компьютером" />
        </section>
        <section className="software">
            <img className="cloud__4" src={ require('src/images/clouds/cloud4.svg') } />
            <img className="cloud__5" src={ require('src/images/clouds/cloud5.svg') } />
            <img className="stars__1" src={ require('src/images/clouds/star1.svg') } />
            <img className="stars__2" src={ require('src/images/clouds/star2.svg') } />
            <img className="stars__3" src={ require('src/images/clouds/star8.svg') } />
            <img className="cloud__6" src={ require('src/images/clouds/cloud6.svg') } />
            <h2 className="section-title software__title">типовые программы 1c</h2>
            <div className="software__grid-1">
                <div className="card">
                    <h3 className="card__title">1С: Бухгалтерия предприятия</h3>
                    <p className="card__description">
                        Профессиональный инструмент бухгалтера.
                        С&nbsp;его помощью можно вести бухгалтерский и&nbsp;налоговый учет,
                        готовить и&nbsp;сдавать обязательную отчетность
                        </p>
                </div>
                <div className="card">
                    <h3 className="card__title"> 1С: Зарплата и управление персоналом</h3>
                    <p className="card__description">
                        Автоматизация задач,
                        связанных с&nbsp;расчетом заработной платы персонала
                        и&nbsp;реализацией кадровой политики
                        </p>
                </div>
                <div className="card">
                    <h3 className="card__title">1С: Управление торговлей</h3>
                    <p className="card__description">
                        Позволяет автоматизировать задачи
                        оперативного и&nbsp;управленческого учета,
                        анализа и&nbsp;планирования торговых операций
                        </p>
                </div>
            </div>
            <div className="software__grid-2">
                <div className="card">
                    <h3 className="card__title">1с: управление нашей фирмой</h3>
                    <p className="card__description">
                        Торговля и&nbsp;склад, услуги и&nbsp;работы, закупки и&nbsp;резервы,
                        банк и&nbsp;касса, кадры и&nbsp;расчет зарплаты, производство и
                        сборочные операции, аналитические отчеты и&nbsp;CRM
                        </p>
                </div>
                <div className="card">
                    <h3 className="card__title">1С: Садовод</h3>
                    <p className="card__description">
                        Автоматизация бухгалтерского и&nbsp;налогового учета,
                        включая подготовку обязательной отчетности в&nbsp;
                        садоводческих некоммерческих товариществах (СНТ)
                        </p>
                </div>
            </div>
            <a className="software__link-advantage" href="advantages.html">
                <button className="software__button">
                    Узнать подробнее
                    </button>
            </a>
        </section>
        <section className="advantages">
            <h2 className="section-title advantages__title">преимущества сервиса</h2>
            <ul className="grid-list">
                <li className="grid-list__element">
                    <img alt="иконка ракеты" className="grid-list__icon" src={ require('src/images/rocket.svg') } />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Быстрый старт</h3>
                        <p className="grid-list__description">
                            Для начала работы достаточно подключиться к&nbsp;системе.
                            Это займёт не&nbsp;более 1&nbsp;минуты
                            </p>
                    </div>
                </li>
                <li className="grid-list__element">
                    <img alt="иконка группы людей" className="grid-list__icon" src={ require('src/images/work.svg') } />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Совместная работа</h3>
                        <p className="grid-list__description">
                            Работа с&nbsp;другими сотрудниками в&nbsp;режиме реального времени
                            </p>
                    </div>
                </li>
                <li className="grid-list__element">
                    <img alt="иконка лицензии" className="grid-list__icon" src={ require('src/images/license.svg') } />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Предустановленная лицензия</h3>
                        <p className="grid-list__description">
                            Вам не&nbsp;придётся покупать лицензию.
                            Для начала работы достаточно войти в&nbsp;систему
                            </p>
                    </div>
                </li>
                <li className="grid-list__element">
                    <img alt="иконка глобуса" className="grid-list__icon" src={ require('src/images/world.svg') } />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Доступ из любой точки мира</h3>
                        <p className="grid-list__description">
                            Ведение всех видов учётов онлайн
                            из&nbsp;любой точки мира в&nbsp;любое время
                            </p>
                    </div>
                </li>
                <li className="grid-list__element">
                    <img alt="иконка сервера" className="grid-list__icon" src={ require('src/images/safety.svg') } />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Защищённость</h3>
                        <p className="grid-list__description">
                            Безопасное хранилище для ваших файлов,
                            доступ к&nbsp;которому вы&nbsp;можете получить отовсюду
                            </p>
                    </div>
                </li>
                <li className="grid-list__element">
                    <img alt="иконка копилки" className="grid-list__icon" src={ require('src/images/help.svg') } />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Помогаем экономить</h3>
                        <p className="grid-list__description">
                            Не&nbsp;нужно оплачивать серверное оборудование,
                            ПО&nbsp;и&nbsp;обслуживание
                            </p>
                    </div>
                </li>
            </ul>
        </section>
        <section className="security">
            <img className="cloud__7" src={ require('src/images/clouds/cloud7.svg') } />
            <img className="cloud__8" src={ require('src/images/clouds/cloud16.svg') } />
            <img className="stars__4" src={ require('src/images/clouds/star4.svg') } />
            <img className="cloud__9" src={ require('src/images/clouds/cloud8.svg') } />
            <div className="security__left-block">
                <h2 className="section-title security__title">мы&nbsp;заботимся о&nbsp;безопасности ваших данных</h2>
                <img alt="компьютер и сервер" className="security__image" src={ require('src/images/security.png') } />
            </div>
            <ul className="security__right-block">
                <li className="grid-list__element security__right-element">
                    <img src={ require('src/images/list.svg') } alt="иконка листа" className="security__icon" />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Ежедневная архивация</h3>
                        <p className="grid-list__description">
                            Глубина архивации: 14&nbsp;дней + обязательная копия на&nbsp;начало месяца
                            </p>
                    </div>
                </li>
                <li className="grid-list__element security__right-element">
                    <img src={ require('src/images/list.svg') } alt="иконка листа" className="security__icon" />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Использование SSL-протокола</h3>
                        <p className="grid-list__description">
                            Это обеспечивает безопасность обмена данными между вашим компьютером и&nbsp;сервером
                            </p>
                    </div>
                </li>
                <li className="grid-list__element security__right-element">
                    <img src={ require('src/images/list.svg') } alt="иконка листа" className="security__icon" />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Надёжный дата-центр</h3>
                        <p className="grid-list__description">
                            Дата-центр находится под круглосуточной охраной и&nbsp;видеонаблюдением.
                            Сервис доступен 99,7% времени
                            </p>
                    </div>
                </li>
                <li className="grid-list__element security__right-element">
                    <img src={ require('src/images/list.svg') } alt="иконка листа" className="security__icon" />
                    <div className="grid-list__text-block">
                        <h3 className="grid-list__title">Постоянный мониторинг работоспособности</h3>
                        <p className="grid-list__description">
                            Наши системные администраторы ежедневно следят за&nbsp;работой
                            оборудования и&nbsp;программного обеспечения
                            </p>
                    </div>
                </li>
            </ul>
        </section>
        <section className="start-work">
            <img className="cloud__10" src={ require('src/images/clouds/cloud9.svg') } />
            <img className="stars__5" src={ require('src/images/clouds/star5.svg') } />
            <img className="stars__6" src={ require('src/images/clouds/star9.svg') } />
            <img className="cloud__11" src={ require('src/images/clouds/cloud10.svg') } />
            <img className="cloud__12" src={ require('src/images/clouds/cloud11.svg') } />
            <h2 className="section-title start-work__title">Начать работу в&nbsp;&laquo;мой офис&raquo; просто!</h2>
            <div className="start-work__container">
                <img src={ require('src/images/startwork.jpg') }
                    alt="облако с сервером и компьюетром"
                    className="security__image" />
                <div className="start-work__right-block">
                    <div className="start-work__image-container">
                        <img className="start-work__icon" src={ require('src/images/registration.svg') } />
                        <img className="start-work__icon" src={ require('src/images/download.svg') } />
                        <img className="start-work__icon" src={ require('src/images/start.svg') } />
                        <img className="start-work__line" src={ require('src/images/line.svg') } />
                    </div>
                    <ul className="security__right-block">
                        <li className="grid-list__element start-work__element security__right-element">
                            <div className="grid-list__text-block">
                                <h3 className="grid-list__title">1. зарегистрируйтесь</h3>
                                <p className="grid-list__description">
                                    Регистрация бесплатна! Вам нужен только email и&nbsp;телефон
                                </p>
                            </div>
                        </li>
                        <li className="grid-list__element start-work__element security__right-element">
                            <div className="grid-list__text-block">
                                <h3 className="grid-list__title">2. Скачайте программу</h3>
                                <p className="grid-list__description">
                                    На&nbsp;ваш e-mail придёт ссылка для входа в&nbsp;личный кабинет,
                                    где вы&nbsp;можете скачать программу
                                    </p>
                            </div>
                        </li>
                        <li className="grid-list__element start-work__element security__right-element">
                            <div className="grid-list__text-block">
                                <h3 className="grid-list__title">3. Начните работу</h3>
                                <p className="grid-list__description">
                                    Запустите программу и&nbsp;начните работу. Первые 7&nbsp;дней бесплатно!
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="software__button start-work__button">Запустить 1С прямо сейчас</button>
        </section>
        <section className="reviews">
            <div className="reviews__background"></div>
            <div className="reviews__content">
                <img className="cloud__13" src={ require('src/images/clouds/cloud12.svg') } />
                <h2 className="section-title reviews__title">отзывы наших клиентов</h2>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="swiper-card">
                                <div className="swiper-card__wrapper">
                                    <img className="swiper-card__icon" src={ require('src/images/quote.svg') } alt="ковычки" />
                                    <h3 className="swiper-card__title">горбунов руслан</h3>
                                    <p className="swiper-card__author">Директор РА "Brana Sabina"</p>
                                    <p className="swiper-card__description">
                                        1С - спецпрограмма и ее настройка и/или установка — дело рук профессионалов.
                                        Уже сколько раз в офисе переустанавливали Windows, меняли компьютеры, а с 1С все в порядке.
                                        Даже настраивать ничего не нужно. Очень радует, что все программы теперь у нас лицензионные.
                                        И с обновлениями 1С нет проблем — все устанавливается своевременно.
                                        Мы довольны вашей работой, продолжайте в том же духе!
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="swiper-card">
                                <div className="swiper-card__wrapper">
                                    <img className="swiper-card__icon" src={ require('src/images/quote.svg') } alt="ковычки" />
                                    <h3 className="swiper-card__title">горбунов руслан</h3>
                                    <p className="swiper-card__author">Директор РА "Brana Sabina"</p>
                                    <p className="swiper-card__description">
                                        1С - спецпрограмма и ее настройка и/или установка — дело рук профессионалов.
                                        Уже сколько раз в офисе переустанавливали Windows, меняли компьютеры, а с 1С все в порядке.
                                        Даже настраивать ничего не нужно. Очень радует, что все программы теперь у нас лицензионные.
                                        И с обновлениями 1С нет проблем — все устанавливается своевременно.
                                        Мы довольны вашей работой, продолжайте в том же духе!
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="swiper-card">
                                <div className="swiper-card__wrapper">
                                    <img className="swiper-card__icon" src={ require('src/images/quote.svg') } alt="ковычки" />
                                    <h3 className="swiper-card__title">горбунов руслан</h3>
                                    <p className="swiper-card__author">Директор РА "Brana Sabina"</p>
                                    <p className="swiper-card__description">
                                        1С - спецпрограмма и ее настройка и/или установка — дело рук профессионалов.
                                        Уже сколько раз в офисе переустанавливали Windows, меняли компьютеры, а с 1С все в порядке.
                                        Даже настраивать ничего не нужно. Очень радует, что все программы теперь у нас лицензионные.
                                        И с обновлениями 1С нет проблем — все устанавливается своевременно.
                                        Мы довольны вашей работой, продолжайте в том же духе!
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
        <section className="customers">
            <img className="cloud__14" src={ require('src/images/clouds/cloud13.svg') } />
            <img className="cloud__15" src={ require('src/images/clouds/cloud14.svg') } />
            <img className="cloud__16" src={ require('src/images/clouds/cloud14.svg') } />
            <img className="cloud__17" src={ require('src/images/clouds/cloud15.svg') } />
            <img className="stars__7" src={ require('src/images/clouds/star7.svg') } />
            <h2 className="section-title customers__title">наши клиенты:</h2>
            <div className="customers__list">
                <div className="customers__block">
                    <img className="customers__logo customers__logo_mullar"
                        src={ require('src/images/mullar.png') }
                        alt="лого компании муллар" />
                </div>
                <div className="customers__block">
                    <img className="customers__logo"
                        src={ require('src/images/toys.png') }
                        alt="лого компании муллар" />
                </div>
                <div className="customers__block">
                    <img className="customers__logo customers__logo_ferex"
                        src={ require('src/images/ferex.png') }
                        alt="лого компании муллар" />
                </div>
                <div className="customers__block">
                    <img className="customers__logo customers__logo_fest"
                        src={ require('src/images/fest.png') }
                        alt="лого компании муллар" />
                </div>
                <div className="customers__block">
                    <img className="customers__logo customers__logo_congress"
                        src={ require('src/images/congress.png') }
                        alt="лого компании муллар" />
                </div>
                <div className="customers__block">
                    <img className="customers__logo customers__logo_maximus"
                        src={ require('src/images/maximus.png') }
                        alt="лого компании муллар" />
                </div>
                <div className="customers__block">
                    <img className="customers__logo customers__logo_suvarstroit"
                        src={ require('src/images/suvarstroit.png') }
                        alt="лого компании муллар" />
                </div>
                <div className="customers__block">
                    <img className="customers__logo customers__logo_arbitre"
                        src={ require('src/images/arbitre.png') }
                        alt="лого компании муллар" />
                </div>
            </div>
        </section>
    </main>;
}